import { useEffect, useRef, useState, useCallback } from "react";
import { useTranslation } from "./locales/useTranslation";

const CELL_SIZE = 6;
const MAX_MEMORY_BYTES = 50 * 1024 * 1024;

export default function GameOfLife() {
  const { projects: { gameOfLife: t } } = useTranslation();

  const [gridSize, setGridSize] = useState(100);
  const [pendingGridSize, setPendingGridSize] = useState(100);
  const [running, setRunning] = useState(0); // 0=stopped, 1=forward, -1=backward
  const [speed, setSpeed] = useState(100);
  const [historyCount, setHistoryCount] = useState(1);
  const [maxHistory, setMaxHistory] = useState(Math.floor(MAX_MEMORY_BYTES / (gridSize * gridSize)));

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);

  const gridHistoryRef = useRef<Uint8Array[]>([]);
  const currentIndexRef = useRef(0);
  const maxHistoryRef = useRef(1000);

  const runningRef = useRef(running);
  const speedRef = useRef(speed);

  const lastTimeRef = useRef(0);
  const accRef = useRef(0);
  const isDrawingRef = useRef(false);
  const drawValueRef = useRef<0 | 1>(1);

  const getIndex = useCallback((x: number, y: number) => y * gridSize + x, [gridSize]);

  const draw = useCallback((ctx: CanvasRenderingContext2D, grid: Uint8Array) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.fillStyle = "lime";
    for (let y = 0; y < gridSize; y++) {
      for (let x = 0; x < gridSize; x++) {
        if (grid[getIndex(x, y)]) ctx.fillRect(x * CELL_SIZE, y * CELL_SIZE, CELL_SIZE, CELL_SIZE);
      }
    }
  }, [gridSize, getIndex]);

  const createGrid = useCallback(() => {
    const arr = new Uint8Array(gridSize * gridSize);
    for (let i = 0; i < arr.length; i++) arr[i] = Math.random() > 0.7 ? 1 : 0;
    return arr;
  }, [gridSize]);

  const countNeighbors = useCallback((grid: Uint8Array, x: number, y: number) => {
    let sum = 0;
    for (let dy = -1; dy <= 1; dy++) {
      for (let dx = -1; dx <= 1; dx++) {
        if (dx === 0 && dy === 0) continue;
        const nx = (x + dx + gridSize) % gridSize;
        const ny = (y + dy + gridSize) % gridSize;
        sum += grid[getIndex(nx, ny)];
      }
    }
    return sum;
  }, [gridSize, getIndex]);

  const nextGeneration = useCallback((grid: Uint8Array) => {
    const newGrid = new Uint8Array(grid.length);
    for (let y = 0; y < gridSize; y++) {
      for (let x = 0; x < gridSize; x++) {
        const i = getIndex(x, y);
        const neighbors = countNeighbors(grid, x, y);
        if (grid[i] === 1 && (neighbors === 2 || neighbors === 3)) newGrid[i] = 1;
        else if (grid[i] === 0 && neighbors === 3) newGrid[i] = 1;
      }
    }
    return newGrid;
  }, [gridSize, getIndex, countNeighbors]);

  const stepGeneration = useCallback((direction: 1 | -1) => {
    if (gridHistoryRef.current.length === 0) return;
    let newGrid: Uint8Array;
    if (direction === 1) {
      newGrid = nextGeneration(gridHistoryRef.current[currentIndexRef.current]);
      currentIndexRef.current++;
      if (currentIndexRef.current < gridHistoryRef.current.length) {
        gridHistoryRef.current = gridHistoryRef.current.slice(0, currentIndexRef.current);
      }
      gridHistoryRef.current.push(newGrid);
      if (gridHistoryRef.current.length > maxHistoryRef.current) {
        gridHistoryRef.current.shift();
        currentIndexRef.current--;
      }
    } else {
      if (currentIndexRef.current > 0) currentIndexRef.current--;
      newGrid = gridHistoryRef.current[currentIndexRef.current];
    }
    draw(ctxRef.current!, newGrid);
    setHistoryCount(currentIndexRef.current + 1);
  }, [draw, nextGeneration]);

    const loop = (timestamp: number) => {
      if (runningRef.current === 0) return;
      const delta = timestamp - lastTimeRef.current;
      lastTimeRef.current = timestamp;
      accRef.current += delta;
      if (accRef.current >= speedRef.current) {
        stepGeneration(runningRef.current === 1 ? 1 : -1);
        accRef.current = 0;
      }
      requestAnimationFrame(loop);
    };

  useEffect(() => {
    const canvas = canvasRef.current!;
    ctxRef.current = canvas.getContext("2d")!;
    gridHistoryRef.current = [createGrid()];
    currentIndexRef.current = 0;
    maxHistoryRef.current = Math.floor(MAX_MEMORY_BYTES / (gridSize * gridSize));
    setHistoryCount(1);
    draw(ctxRef.current, gridHistoryRef.current[0]);
  }, [createGrid, draw, gridSize]);

  useEffect(() => {
    setMaxHistory(Math.floor(MAX_MEMORY_BYTES / (gridSize * gridSize)));
  }, [gridSize]);

  const toggleRunning = (direction: 1 | -1 = 1) => {
    runningRef.current = runningRef.current === direction ? 0 : direction;
    setRunning(runningRef.current);
    speedRef.current = speed;
    if (runningRef.current !== 0) {
      lastTimeRef.current = performance.now();
      requestAnimationFrame(loop);
    }
  };

  const singleStepForward = () => stepGeneration(1);
  const singleStepBackward = () => stepGeneration(-1);

  const reset = () => {
    gridHistoryRef.current = [createGrid()];
    currentIndexRef.current = 0;
    setHistoryCount(1);
    draw(ctxRef.current!, gridHistoryRef.current[0]);
  };

  const clearGrid = () => {
    const arr = new Uint8Array(gridSize * gridSize);
    gridHistoryRef.current = [arr];
    currentIndexRef.current = 0;
    setHistoryCount(1);
    draw(ctxRef.current!, arr);
  };

  const getCellFromMouse = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const rect = canvasRef.current!.getBoundingClientRect();
    const x = Math.floor((e.clientX - rect.left) / CELL_SIZE);
    const y = Math.floor((e.clientY - rect.top) / CELL_SIZE);
    return { x, y };
  };

  const setCell = (x: number, y: number, value: 0 | 1) => {
    const i = getIndex(x, y);
    gridHistoryRef.current[currentIndexRef.current][i] = value;
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
    isDrawingRef.current = true;
    const { x, y } = getCellFromMouse(e);
    drawValueRef.current = e.button === 2 ? 0 : 1;
    setCell(x, y, drawValueRef.current);
    draw(ctxRef.current!, gridHistoryRef.current[currentIndexRef.current]);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDrawingRef.current) return;
    const { x, y } = getCellFromMouse(e);
    setCell(x, y, drawValueRef.current);
    draw(ctxRef.current!, gridHistoryRef.current[currentIndexRef.current]);
  };

  const stopDrawing = () => { isDrawingRef.current = false; };

  return (
    <div>
      <h2>{t.conwaysGameOfLife}</h2>
      <canvas
        ref={canvasRef}
        width={gridSize * CELL_SIZE}
        height={gridSize * CELL_SIZE}
        style={{ border: "1px solid #333" }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={stopDrawing}
        onMouseLeave={stopDrawing}
        onContextMenu={(e) => e.preventDefault()}
      />

      <div className="game-controls">
        <button onClick={() => toggleRunning(1)}>{running === 1 ? t.controls.pause : t.controls.start}</button>
        <button onClick={() => toggleRunning(-1)}>{running === -1 ? t.controls.pause : t.controls.startBackward}</button>
        <button onClick={singleStepForward} disabled={running !== 0}>{t.controls.singleStep}</button>
        <button onClick={singleStepBackward} disabled={running !== 0}>{t.controls.singleStepBackward}</button>
        <button onClick={reset}>{t.controls.random}</button>
        <button onClick={clearGrid}>{t.controls.clear}</button>

        <div>
          <label>Grid Size: {pendingGridSize}</label>
          <input type="range" min={50} max={300} step={1} value={pendingGridSize} onChange={(e) => setPendingGridSize(Number(e.target.value))}/>
          <button onClick={() => { setGridSize(pendingGridSize); reset(); }}>Apply Size</button>
        </div>

        <div>
          <label>{t.controls.generationDuration}</label>
          <input type="range" min={10} max={2000} step={10} value={speed} onChange={(e) => setSpeed(Number(e.target.value))}/>
          <label>{speed} {t.controls.ms}</label>
          <label>{(1000 / speed).toFixed(1)} {t.controls.generationsPerSecond}</label>
        </div>

        <div>
          <label>History Usage:</label>
          <progress max={maxHistory} value={historyCount} style={{ width: "100%" }} />
          <small>{historyCount} / {maxHistory} gespeicherte Generationen</small>
        </div>

        <div>
          <small>Max stored generations: {maxHistory}</small>
        </div>
      </div>
    </div>
  );
}
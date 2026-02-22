import { useEffect, useRef, useState, useCallback } from "react";
import { useTranslation } from "./locales/useTranslation";

const CELL_SIZE = 6;
const MAX_MEMORY_BYTES = 50 * 1024 * 1024;

export default function GameOfLife() {
  const { projects: { gameOfLife: t } } = useTranslation();

  const [gridSize, setGridSize] = useState(100);
  const [running, setRunning] = useState(0); // 0=stopped, 1=forward, -1=backward
  const [speed, setSpeed] = useState(100);
  const [historyCount, setHistoryCount] = useState(1);
  const [maxHistory, setMaxHistory] = useState(Math.floor(MAX_MEMORY_BYTES / (gridSize * gridSize)));
  const [loopInHistory, setLoopInHistory] = useState(false);
  const [randomness, setRandomness] = useState(0.7);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);

  const gridHistoryRef = useRef<Uint8Array[]>([]);
  const currentIndexRef = useRef(0);
  const maxHistoryRef = useRef(1000);

  const runningRef = useRef(running);
  const speedRef = useRef(speed);
  const loopInHistoryRef = useRef(loopInHistory);

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

  const createGrid = useCallback((randomness: number) => {
    const arr = new Uint8Array(gridSize * gridSize);
    for (let i = 0; i < arr.length; i++) arr[i] = Math.random() > randomness ? 1 : 0;
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
    const history = gridHistoryRef.current;
    if (history.length === 0) return;

    const atStart = currentIndexRef.current === 0;
    const atEnd = currentIndexRef.current === history.length - 1;
    const bufferFull = history.length >= maxHistoryRef.current;

    let newGrid: Uint8Array;

    if (loopInHistoryRef.current && bufferFull) {
      if (direction === 1 && atEnd) {
        runningRef.current = -1;
        setRunning(-1);
        currentIndexRef.current--;
        newGrid = history[currentIndexRef.current];
        draw(ctxRef.current!, newGrid);
        setHistoryCount(currentIndexRef.current + 1);
        return;
      }

      if (direction === -1 && atStart) {
        runningRef.current = 1;
        setRunning(1);
        currentIndexRef.current++;
        newGrid = history[currentIndexRef.current];
        draw(ctxRef.current!, newGrid);
        setHistoryCount(currentIndexRef.current + 1);
        return;
      }
    }

    if (direction === -1) {
      if (!atStart) currentIndexRef.current--;
      newGrid = history[currentIndexRef.current];
    } else {
      newGrid = nextGeneration(history[currentIndexRef.current]);
      currentIndexRef.current++;

      if (currentIndexRef.current < history.length) {
        gridHistoryRef.current = history.slice(0, currentIndexRef.current);
      }

      gridHistoryRef.current.push(newGrid);

      if (
        !loopInHistoryRef.current &&
        gridHistoryRef.current.length > maxHistoryRef.current
      ) {
        gridHistoryRef.current.shift();
        currentIndexRef.current--;
      }
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
    gridHistoryRef.current = [createGrid(randomness)];
    currentIndexRef.current = 0;
    maxHistoryRef.current = Math.floor(MAX_MEMORY_BYTES / (gridSize * gridSize));
    setHistoryCount(1);
    draw(ctxRef.current, gridHistoryRef.current[0]);
  }, [createGrid, draw, gridSize, randomness]);

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
  
  const reset = (r: number) => {
    if (r === randomness){
      gridHistoryRef.current = [createGrid(r)];
      currentIndexRef.current = 0;
      setHistoryCount(1);
    }
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
        <div style={{display: 'flex', flexDirection: 'column'}}>
          <label>{t.controls.random}</label>
          {[0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9].map(r => (
            <button
              key={r}
              style={{
                color: r === randomness ? 'red': '',
                outline: r === randomness ? "2px solid lime" : "none"
              }}
              onClick={() => {
                setRandomness(r);
                reset(r);
              }}
            >{r}</button>
            ))}
        </div>
        <button onClick={clearGrid}>{t.controls.clear}</button>

        <div>
          <label>{t.controls.gridSize}</label>
          <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", flexDirection: 'column' }}>
            {[50, 100, 150, 200, 250, 300].map(size => (
              <button
                key={size}
                style={{
                  color: size === gridSize ? 'red' : '',
                  outline: gridSize === size ? "2px solid lime" : "none"
                }}
                onClick={() => {
                  setGridSize(size);
                }}
                disabled={gridSize === size || running !== 0}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label>{t.controls.generationDuration}</label>
          <input type="range" min={10} max={2000} step={10} value={speed} onChange={(e) => setSpeed(Number(e.target.value))}/>
          <label>{speed} {t.controls.ms}</label>
          <label>{(1000 / speed).toFixed(1)} {t.controls.generationsPerSecond}</label>
        </div>

        <div>
          <label>{t.controls.historyUsage}</label>
          <progress
            max={maxHistory}
            value={historyCount}
            style={{
              width: "100%",
              accentColor:
                historyCount / maxHistory > 0.99
                  ? "red"
                  : historyCount / maxHistory > 0.8
                  ? "orange"
                  : "lime"
            }}
          />
          <small>{historyCount} / {maxHistory} {t.controls.savedGenerations}</small>
          {historyCount / maxHistory > 0.8 && !loopInHistory && (
            <div style={{ color: "orange", fontSize: "0.9rem" }}>
              {t.controls.historyAlmostFull}
            </div>
          )}
          {historyCount / maxHistory > 0.9 && !loopInHistory && (
            <div style={{ color: "red", fontSize: "0.9rem" }}>
              {t.controls.historyFull}
            </div>
          )}
        </div>
        <label>
        <input
          type="checkbox"
          checked={loopInHistory}
          onChange={(e) => {
            setLoopInHistory(e.target.checked);
            loopInHistoryRef.current = e.target.checked;
          }}
        />
        {t.controls.loopWithinHistory}
      </label>
      </div>
    </div>
  );
}
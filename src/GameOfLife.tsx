import { useEffect, useRef, useState } from "react";
import {useTranslation} from "./locales/useTranslation";

const GRID_SIZE = 100;
const CELL_SIZE = 6;

export default function GameOfLife() {
    const { projects: t } = useTranslation();
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const gridRef = useRef<Uint8Array>(createGrid());
    const runningRef = useRef(false);
    const speedRef = useRef(100); // ms pro Generation
    const lastTimeRef = useRef(0);
    const accRef = useRef(0);


    const [running, setRunning] = useState(false);
    const [speed, setSpeed] = useState(100);

    const ctxRef = useRef<CanvasRenderingContext2D | null>(null);

    function loop(timestamp: number) {
      if (!runningRef.current) return;

      const delta = timestamp - lastTimeRef.current;
      lastTimeRef.current = timestamp;
      accRef.current += delta;

      if (accRef.current >= speedRef.current) {
        gridRef.current = nextGeneration(gridRef.current);
        accRef.current = 0;
      }

      draw(ctxRef.current!, gridRef.current);

      requestAnimationFrame(loop);
    }

  function createGrid() {
    const arr = new Uint8Array(GRID_SIZE * GRID_SIZE);
    for (let i = 0; i < arr.length; i++) {
      arr[i] = Math.random() > 0.7 ? 1 : 0;
    }
    return arr;
  }

  function getIndex(x: number, y: number) {
    return y * GRID_SIZE + x;
  }

  function countNeighbors(grid: Uint8Array, x: number, y: number) {
    let sum = 0;

    for (let dy = -1; dy <= 1; dy++) {
      for (let dx = -1; dx <= 1; dx++) {
        if (dx === 0 && dy === 0) continue;

        const nx = (x + dx + GRID_SIZE) % GRID_SIZE;
        const ny = (y + dy + GRID_SIZE) % GRID_SIZE;

        sum += grid[getIndex(nx, ny)];
      }
    }

    return sum;
  }

  function nextGeneration(grid: Uint8Array) {
    const newGrid = new Uint8Array(grid.length);

    for (let y = 0; y < GRID_SIZE; y++) {
      for (let x = 0; x < GRID_SIZE; x++) {
        const i = getIndex(x, y);
        const neighbors = countNeighbors(grid, x, y);

        if (grid[i] === 1 && (neighbors === 2 || neighbors === 3)) {
          newGrid[i] = 1;
        } else if (grid[i] === 0 && neighbors === 3) {
          newGrid[i] = 1;
        }
      }
    }

    return newGrid;
  }

  function draw(ctx: CanvasRenderingContext2D, grid: Uint8Array) {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    ctx.fillStyle = "lime";

    for (let y = 0; y < GRID_SIZE; y++) {
      for (let x = 0; x < GRID_SIZE; x++) {
        if (grid[getIndex(x, y)]) {
          ctx.fillRect(
            x * CELL_SIZE,
            y * CELL_SIZE,
            CELL_SIZE,
            CELL_SIZE
          );
        }
      }
    }
  }

      useEffect(() => {
      const canvas = canvasRef.current!;
      ctxRef.current = canvas.getContext("2d")!;

      draw(ctxRef.current, gridRef.current);
    }, []);

  function toggleRunning() {
    runningRef.current = !runningRef.current;
    setRunning(runningRef.current);

    if (runningRef.current) {
        lastTimeRef.current = performance.now();
        requestAnimationFrame(loop);
    }
  }

  function reset() {
    gridRef.current = createGrid();
    const ctx = canvasRef.current!.getContext("2d")!;
    draw(ctx, gridRef.current);
  }

  return (
    <div>
    <h2>{t.conweysGameOfLife}</h2>
      <canvas
        ref={canvasRef}
        width={GRID_SIZE * CELL_SIZE}
        height={GRID_SIZE * CELL_SIZE}
        style={{ border: "1px solid #333" }}
      />

      <div style={{ marginTop: 12 }}>
      <input
          type="range"
          min={20}
          max={500}
          step={10}
          value={speed}
          onChange={(e) => {
            const value = Number(e.target.value);
            setSpeed(value);
            speedRef.current = value;
          }}
        />

        <span>{speed} ms</span>

        <button onClick={toggleRunning}>
          {running ? "Pause" : "Start"}
        </button>

        <button onClick={reset}>Random</button>
      </div>
    </div>
  );
}

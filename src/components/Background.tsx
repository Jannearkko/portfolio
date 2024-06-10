import React, { useEffect, useRef } from 'react';

const MatrixBackground: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas!.getContext('2d')!;
        canvas!.width = window.innerWidth;
        canvas!.height = window.innerHeight; 

        ctx.fillStyle = 'black';
        ctx.fillRect(0, 0, canvas!.width, canvas!.height);

        const binary = '01';
        const fontSize = 16;
        const columns = canvas!.width / fontSize;


        const drops: number[] = Array(Math.floor(columns)).fill(1);

        function draw() {
            ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
            ctx.fillRect(0, 0, canvas!.width, canvas!.height);

            ctx.fillStyle = 'rgba(0,0,255,0.555)';
            ctx.font = `${fontSize}px monospace`;

            for (let i = 0; i < drops.length; i++) {
                const text = binary.charAt(Math.floor(Math.random() * binary.length));
                ctx.fillText(text, i * fontSize, drops[i] * fontSize);

                if (drops[i] * fontSize > canvas!.height && Math.random() > 0.975) {
                    drops[i] = 0;
                }
                drops[i]++;
            }
        }

        const interval = setInterval(draw, 100);

        return () => clearInterval(interval);
    }, []);

    return <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full"></canvas>;
};

export default MatrixBackground;

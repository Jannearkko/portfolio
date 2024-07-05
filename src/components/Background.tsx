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

        const characters = 'αβγδεζηθικλμνξοπρστυφχψω';
        const fontSize = 16;
        const largerFontSize = 24; // Larger font size for bright characters
        const columns = canvas!.width / fontSize;

        const drops: number[] = Array(Math.floor(columns)).fill(1);
        const brightCharacters: { [key: number]: { duration: number, fontSize: number } } = {}; // To track bright characters and their font size

        function draw() {
            ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
            ctx.fillRect(0, 0, canvas!.width, canvas!.height);

            for (let i = 0; i < drops.length; i++) {
                const text = characters.charAt(Math.floor(Math.random() * characters.length));

                // Determine if this character should be brighter and larger
                if (brightCharacters[i]) {
                    ctx.fillStyle = 'rgba(0, 0, 255, 1)'; // Brighter blue
                    ctx.font = `${brightCharacters[i].fontSize}px 'Noto Sans Egyptian Hieroglyphs'`;
                    brightCharacters[i].duration--; // Decrease the count for how long it stays bright
                    if (brightCharacters[i].duration <= 0) {
                        delete brightCharacters[i]; // Remove from bright characters list
                    }
                } else {
                    ctx.fillStyle = 'rgba(0, 0, 255, 0.555)'; // Regular blue
                    ctx.font = `${fontSize}px 'Noto Sans Egyptian Hieroglyphs'`;
                    if (Math.random() > 0.995) { // Small chance to become bright
                        brightCharacters[i] = { duration: 10, fontSize: largerFontSize }; // Stay bright and larger for 20 frames
                    }
                }

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
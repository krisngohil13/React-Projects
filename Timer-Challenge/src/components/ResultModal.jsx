import React, { useImperativeHandle, forwardRef, useRef } from 'react';
import {createPortal} from 'react-dom';


const ResultModal = forwardRef(({ targetTime, remainingTime, onReset }, ref) => {
    const dialog = useRef();
    
    // Handle user lost condition, and safely calculate score and time.
    const userLost = remainingTime <= 0;
    const formattedTime = ((remainingTime > 0 ? remainingTime : 0) / 1000).toFixed(2); // Ensure positive time formatting
    
    // Calculate score. Ensure the score is never negative.
    const score = targetTime > 0
        ? Math.max(0, Math.min(100, ((targetTime * 1000 - remainingTime) / (targetTime * 1000)) * 100))
        : 0;

    useImperativeHandle(ref, () => ({
        open() {
            dialog.current.showModal(); // Show modal
        },
        close() {
            dialog.current.close(); // Close modal
        }
    }));

    return createPortal(
        <dialog ref={dialog} className="result-modal">
            {userLost ? <h2>You Lost</h2> : <h2>Your Score: {score}%</h2>}
            <p>
                The Target Time was <strong>{targetTime} seconds</strong>
            </p>
            <p>
                You stopped the timer at <strong>{formattedTime} seconds</strong>
            </p>
            <form method="dialog" onSubmit={onReset}>
                <button type="submit">Close</button>
            </form>
        </dialog>,
        document.getElementById('modal')
    );
});

export default ResultModal;

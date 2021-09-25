import React, { useState } from "react";
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const unavailableItems = [
    { startPx: 10, endPx: 30 },
    { startPx: 55, endPx: 65 },
    { startPx: 35, endPx: 50 },
    { startPx: 20, endPx: 40 },
    { startPx: 60, endPx: 70 },
]

function CalculateListComponent() {
    const [result, setResult] = useState("");
    const onClick = () => {
        const filterList = [...unavailableItems].sort(function (a, b) {
            return a.startPx - b.startPx || a.endPx - b.endPx;
        }).reduce((a, b) => {
            var last = a[a.length - 1] || [];
            if (last.startPx <= b.startPx && b.startPx <= last.endPx) {
                if (last.endPx < b.endPx) {
                    last.endPx = b.endPx
                }
                return a
            }
            return a.concat(b);
        }, []);
        var pretty = JSON.stringify(filterList, undefined, 4);
        setResult(pretty);
    };
    return (
        <>
            <Stack spacing={2} style={{ width: 300 }} direction="column">
                <Button onClick={onClick} variant="contained">Click here for Test 2</Button>
                <TextareaAutosize
                    disabled
                    maxRows={10}
                    placeholder="Result"
                    value={result}
                />
            </Stack>
        </>
    );
}

export default CalculateListComponent;

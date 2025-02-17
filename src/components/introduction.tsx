"use client";
import { useState, useEffect } from "react";
import { Typography, Fade, Link } from '@mui/material';

export const Introduction = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        // Trigger fade-in effect when component mounts
        setVisible(true);
    }, []);
    return (
        <div>
            <Fade in={visible} timeout={2000}>
                <Typography variant="h1" sx={{ fontSize: { xs: "2rem", sm: "2rem", md: "3rem" } }}>
                    Hello There!
                </Typography>
            </Fade>
            <Typography variant="h2" sx={{ fontSize: { xs: "2rem", sm: "2rem", md: "3rem" } }} gutterBottom>
                My name is えりな (Erina).
            </Typography>
            <Typography component="p" gutterBottom>
                Current software engineer at Wayfair working on frontend experience for cart and checkout.
            </Typography>
            <br />
            <Typography component="p" gutterBottom>
                I used to do genetics research where I became super interested in learning how to code. Now I get to do it for a living!
            </Typography>
            <br />
            <Typography component="p" gutterBottom>
                In my free time, I like to hike, sing, and play video games. I also recently started boxing.
            </Typography>
            <br />
            <Typography component="p" gutterBottom>
                See my <Link href="/resume/erina-resume.pdf">resume</Link> for more!
            </Typography>
        </div>
    )
}
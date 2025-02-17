import Image from "next/image";
import Container from "@mui/material/Container";
import Grid from '@mui/material/Grid2';

import { WorkTimeLine } from "../components/timeline";
import { Introduction } from "../components/introduction";
import { AboutMeImage } from "@/components/about-me-image";
export default function Home() {
  return (
    <div>
      <main>
        <Container sx={{ px: 2, my: 2 }}>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 12 }}>
              <AboutMeImage />
            </Grid>
            <Grid size={{ xs: 12, md: 7 }} sx={{ px: 2 }} className="bg-light-orange">
              <Introduction />
            </Grid>
            <Grid size={{ xs: 12, md: 5 }}>
              <WorkTimeLine />
            </Grid>
          </Grid>
        </Container>

      </main>
      <footer className="flex flex-col items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >

          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Built with React, Tailwind, Material UI, and nextjs.org →
        </a>
      </footer>
    </div >
  );
}

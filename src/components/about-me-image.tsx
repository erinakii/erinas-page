import { Divider, Box, Typography } from "@mui/material";
import Image from "next/image";

export const AboutMeImage = () => {
    return (
        <Divider>
            <Box borderRadius="50%">
                <Image
                    priority
                    src="/images/profile.jpg"
                    height={500}
                    width={500}
                    alt=""
                    className="rounded-full"
                />
            </Box>
        </Divider>
    )
}
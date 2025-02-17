import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { Typography } from '@mui/material';

export const WorkTimeLine = () => {
    return (
        <>
            <Typography
                variant='h4'
            >
                Work Experience
            </Typography>
            <Timeline
                sx={{
                    [`& .${timelineItemClasses.root}:before`]: {
                        flex: 0,
                        padding: 0,
                    },
                }}
            >
                Wayfair
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        <Typography sx={{ fontWeight: 'bold' }}>Software Engineer L1 - L3</Typography>
                        <div>Sep 2019 - current</div>
                    </TimelineContent>
                </TimelineItem>
                edX
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        <Typography sx={{ fontWeight: 'bold' }}>Software Engineer Engineer Intern</Typography>
                        <div>May 2019 - Aug 2019</div>
                    </TimelineContent>
                </TimelineItem>
                TESARO and Vertex Pharmaceuticals
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        <Typography sx={{ fontWeight: 'bold' }}>Clinical Trial Associate</Typography>
                        <div>Mar 2017 - Dec 2018</div>
                    </TimelineContent>
                </TimelineItem>
                MGH
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        <Typography sx={{ fontWeight: 'bold' }}>Clinical Research Coordinator</Typography>
                        <div>May 2014 - Feb 2017</div>
                    </TimelineContent>
                </TimelineItem>
                Vassar College
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot />
                    </TimelineSeparator>
                    <TimelineContent>
                        <div>Graduated 2014</div>
                    </TimelineContent>
                </TimelineItem>
            </Timeline>
        </>
    )
}
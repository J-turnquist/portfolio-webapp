// React
import React from 'react';

// Material UI
import { withStyles } from '@material-ui/core/styles';

// My Custom Components
import NavigationBar from '../../components/NavigationBar';
import BackgroundParticles from '../../components/BackgroundParticles';
import ScrollAppearingText from '../../components/ScrollAppearingText';

// Scroll Jump
import {Link} from 'react-scroll'

// Components
import IconButton from '@material-ui/core/IconButton';
import ScrollIcon from '@material-ui/icons/KeyboardArrowUp';
import WorkIcon from '@material-ui/icons/Work';
import SchoolIcon from '@material-ui/icons/School';
import ClubIcon from '@material-ui/icons/BusinessCenter';

// Transitions
import { Fade, Slide } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

// Timeline
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

// Styles
import styles from './styles';
import theme from '../../theme';

// Data -- useless atm
import { headline } from './data';

const Home = ({ classes }) => {
    return (
        <div className={classes.root}>
          <BackgroundParticles clasName={classes.landingWrapper}/>
          <NavigationBar />

          <Fade in={true} timeout={{ enter: 3000, exit: 1000 }} style={{ transitionDelay:  '720ms'}}>
            <Typography className={classes.landingText} variant="h1" color='primary'>
              {headline}
            </Typography>
          </Fade>

          <Slide className={classes.landingIcon} in={true} direction="up" timeout={3000} style={{ transitionDelay:  '720ms' }}>
            <IconButton aria-label="about" href="#about-me">
              <Link to="about" spy={true} smooth={true}>
                <ScrollIcon label='about' style={{ color: theme.palette.primary, fontSize: 64}} />
              </Link>
            </IconButton>
          </Slide>


          <div id='about' className={classes.aboutWrapper}>
            <div className={classes.aboutSection}>
              <ScrollAppearingText text='About Me' variant='h2' />
              <ScrollAppearingText text="I'm an accomplished software engineer with a complex and diverse background in social, technical, and creative fields." color='primary' variant='body1'/>
              <Slide className={classes.landingIcon} in={true} direction="up" timeout={3000} style={{ transitionDelay:  '720ms' }}>
                <IconButton aria-label="experience" href="#experience">
                  <Link to="experience" spy={true} smooth={true}>
                    <ScrollIcon label='experience' style={{ color: theme.palette.primary, fontSize: 64}} />
                  </Link>
                </IconButton>
              </Slide>
            </div>
          </div>

          <div id='experience' className={classes.experienceWrapper}>
            <div className={classes.experienceSection}>
              <ScrollAppearingText text='Experience' variant='h2' />
            </div>
          </div>

          <VerticalTimeline className={classes.timeline} animate={true}>
            <VerticalTimelineElement
              className={"vertical-timeline-element--work", classes.timelineElement}
              contentStyle={{ background: theme.palette.timeline.green, color: '#fff' }}
              date="February 2021 - present"
              iconStyle={{ background: theme.palette.timeline.green, color: '#fff' }}
              icon={<WorkIcon />}
            >
              <h3 className="vertical-timeline-element-title">Instructional Assistant</h3>
              <h6 className="vertical-timeline-element-subtitle">Diablo Valley College, CA</h6>
              <p>
                Responsible for assisting the head instructor for computer science classes.
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className={"vertical-timeline-element--work", classes.timelineElement}
              contentStyle={{ background: theme.palette.timeline.blue, color: '#fff' }}
              date="November 2020 - present"
              iconStyle={{ background: theme.palette.timeline.blue, color: '#fff' }}
              icon={<WorkIcon />}
            >
              <h3 className="vertical-timeline-element-title">Barista at Blue Bottle Coffee</h3>
              <h6 className="vertical-timeline-element-subtitle">Del Mar, CA</h6>
              <p>
                Responsible for serving up to 500 customers in a day with a standard of perfection in every cup.
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className={"vertical-timeline-element--work", classes.timelineElement}
              contentStyle={{ background: theme.palette.timeline.red, color: '#fff' }}
              date="June 2020 - present"
              iconStyle={{ background: theme.palette.timeline.red, color: '#fff' }}
              icon={<WorkIcon />}
            >
              <h3 className="vertical-timeline-element-title">Software Engineer - Internship</h3>
              <h6 className="vertical-timeline-element-subtitle">Remote - Phoenix, AZ</h6>
              <p>
                Custom Web & App Development
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className={"vertical-timeline-element--work", classes.timelineElement}
              contentStyle={{ background: theme.palette.timeline.green, color: '#fff' }}
              date="2019 - 2020"
              iconStyle={{ background: theme.palette.timeline.green, color: '#fff' }}
              icon={<WorkIcon />}
            >
              <h3 className="vertical-timeline-element-title">Computer Science Instructor</h3>
              <h6 className="vertical-timeline-element-subtitle">Diablo Valley College, CA</h6>
              <p>
                Responsible for developing and delivering a class curriculum catered toward lower-class and first-generation high school students.
                This is an annual summer job with Upward Bound (UB I &  II) and Educational Talent Search (ETS).
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--school"
              contentStyle={{ background: theme.palette.timeline.green, color: '#fff' }}
              date="May 2020  •  3.8 GPA  •  Diablo Valley College"
              iconStyle={{ background: theme.palette.timeline.green, color: '#fff' }}
              icon={<SchoolIcon />}
            >
              <h3 className="vertical-timeline-element-title">A.S. Mathematics</h3>
              <h6 className="vertical-timeline-element-subtitle">Associate's Degree</h6>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--school"
              contentStyle={{ background: theme.palette.timeline.green, color: '#fff' }}
              date="May 2020  •  4.0 GPA  •  Diablo Valley College"
              iconStyle={{ background: theme.palette.timeline.green, color: '#fff' }}
              icon={<SchoolIcon />}
            >
              <h3 className="vertical-timeline-element-title">A.A. Communications</h3>
              <h6 className="vertical-timeline-element-subtitle">Associate's Degree</h6>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className={"vertical-timeline-element--school", classes.timelineElement}
              contentStyle={{ background: theme.palette.timeline.green, color: '#fff' }}
              date="May 2020  •  4.0 GPA  •  Diablo Valley College"
              iconStyle={{ background: theme.palette.timeline.green, color: '#fff' }}
              icon={<SchoolIcon />}
            >
              <h3 className="vertical-timeline-element-title">A.S. Computer Science</h3>
              <h6 className="vertical-timeline-element-subtitle">Associate's Degree</h6>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className={"vertical-timeline-element--work", classes.timelineElement}
              contentStyle={{ background: theme.palette.timeline.green, color: '#fff' }}
              date="2019 - 2020 • 1.5 yrs"
              iconStyle={{ background: theme.palette.timeline.green, color: '#fff' }}
              icon={<WorkIcon />}
            >
              <h3 className="vertical-timeline-element-title">Computer Science Tutor</h3>
              <h6 className="vertical-timeline-element-subtitle">Diablo Valley College</h6>
              <p>
                As the founder of the Diablo Valley College Computer Science tutoring program, I tutored C, C++, Python, Java, and even Assembly.
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className={"vertical-timeline-element--work", classes.timelineElement}
              contentStyle={{ background: theme.palette.timeline.green, color: '#fff' }}
              date="2018 - 2020 • 2 yrs"
              iconStyle={{ background: theme.palette.timeline.green, color: '#fff' }}
              icon={<WorkIcon />}
            >
              <h3 className="vertical-timeline-element-title">Public Speaking Tutor & Competitor</h3>
              <h6 className="vertical-timeline-element-subtitle">Diablo Valley College</h6>
              <p>
                Responsible for developing and critiquing speeches and speakers both academically and competitively.
                Debate Gold Medalist.
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className={"vertical-timeline-element--work", classes.timelineElement}
              contentStyle={{ background: theme.palette.timeline.green, color: '#fff' }}
              date="2018 - 2020 • 2 yrs"
              iconStyle={{ background: theme.palette.timeline.green, color: '#fff' }}
              icon={<ClubIcon />}
            >
              <h3 className="vertical-timeline-element-title">Club Coordinator</h3>
              <h6 className="vertical-timeline-element-subtitle">Diablo Valley College</h6>
              <p>
                Club President, Discussion Facilitator, Event Planner, Teacher, Mentor
              </p>
            </VerticalTimelineElement>

            {/*<VerticalTimelineElement
              className={"vertical-timeline-element--work", classes.timelineElement}
              contentStyle={{ background: theme.palette.timeline.blue, color: '#fff' }}
              contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
              date="2017 - 2020"
              iconStyle={{ background: theme.palette.timeline.blue, color: '#fff' }}
              icon={<WorkIcon />}
            >
              <h3 className="vertical-timeline-element-title">Manual Laborer</h3>
              <h6 className="vertical-timeline-element-subtitle">Bay Area, CA</h6>
              <p>
                Business Owner, Public Relations, Teammate, Team Manager, Roofer, Handyman, Laborer
              </p>
            </VerticalTimelineElement>*/}

            <VerticalTimelineElement
              className={"vertical-timeline-element--work", classes.timelineElement}
              contentStyle={{ background: theme.palette.timeline.brown, color: '#fff' }}
              date="2015 - 2020 • 5 yrs"
              iconStyle={{ background: theme.palette.timeline.brown, color: '#fff' }}
              icon={<WorkIcon />}
            >
              <h3 className="vertical-timeline-element-subtitle">Camp Counselor</h3>
              <h6 className="vertical-timeline-element-subtitle">Koinonia Conference Grounds</h6>
              <p>
                Conflict Management, Discussion Group Leader, Counselor, Mentor
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
    );
};

export default withStyles(styles)(Home);

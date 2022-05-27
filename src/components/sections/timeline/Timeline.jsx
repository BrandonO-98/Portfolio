import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { ReactComponent as WorkIcon } from 'assets/icons/work.svg';
import { ReactComponent as SchoolIcon } from 'assets/icons/school.svg';
import SectionHeader from 'components/elements/SectionHeader';
import timelineData from './TimelineData';

export default function Timeline() {
  return (
    <div className="grid w-full items-center justify-content-center">
      <SectionHeader header="Resume" />
      <a
        target="_blanck"
        href="/Resume_Developer.pdf"
        download="Resume_Developer.pdf"
        className="justify-self-end mr-96 ease-in duration-300 border border-green-500 bg-green-500 text-white px-8 py-2 mt-4 rounded-full font-bold
                  hover:text-black hover:bg-white"
      >
        Download Resume PDF
      </a>
      <VerticalTimeline lineColor="black">
        {timelineData.map((timelineEvent) => (
          <VerticalTimelineElement
            key={timelineEvent.id}
            className="vertical-timeline-element--work"
            contentStyle={timelineEvent.icon === 'work' ? { background: '#DCFCE7', color: '#334155', border: '4px solid #22C55E' }
              : { background: '#FECDD3', color: '#334155', border: '4px solid #F43F5E' }}
            contentArrowStyle={timelineEvent.icon === 'work' ? { borderRight: '10px solid  #22C55E' }
              : { borderRight: '10px solid  #F43F5E' }}
            date={timelineEvent.date}
            iconStyle={timelineEvent.icon === 'work' ? { background: 'white', border: '4px solid #22C55E' }
              : { background: 'white', border: '4px solid #F43F5E' }}
            icon={timelineEvent.icon === 'work' ? <WorkIcon /> : <SchoolIcon />}
          >
            <h2 className="vertical-timeline-element-title">{timelineEvent.title}</h2>
            <h3 className="vertical-timeline-element-subtitle">{timelineEvent.location}</h3>
            <ul className="list-disc ml-4">
              {[...timelineEvent.desc].map((bullet) => <li>{bullet}</li>)}
            </ul>
            {timelineEvent.buttonTxt && (
            <a
              target="_blanck"
              href={timelineEvent.buttonLink}
              className={`grid rounded-full px-4 py-1 mt-1 text-white ease-in duration-200 text-center border 
              hover:text-black hover:bg-none hover:border hover:border-black
              ${timelineEvent.icon === 'work' ? 'bg-green-500 border-green-500 hover:bg-green-200' : 'bg-rose-500 border-rose-500 hover:hover:bg-rose-300'}`}
            >
              {timelineEvent.buttonTxt}
            </a>
            )}
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
}

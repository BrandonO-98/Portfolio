import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { ReactComponent as WorkIcon } from 'assets/icons/work.svg';
import { ReactComponent as SchoolIcon } from 'assets/icons/school.svg';
import timelineData from './TimelineData';

export default function Timeline() {
  return (
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
          <a href="/" className="">Button</a>
        </VerticalTimelineElement>
      ))}

    </VerticalTimeline>
  );
}

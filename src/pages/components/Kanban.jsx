import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import menu from '../../assets/images/menu.png';
import defaultProfile from '../../assets/images/default-profile.png';
import KanbanProgress from './KanbanProgress';
import NewTask from './NewTask';
import { useDrop } from 'react-dnd';
import { DropTarget } from 'react-dnd';

// Color Variables
const backColor = '#eef1f5';

// Styled Components
const MyTitle = styled.p`
  font-size: ${props => props.fontSize};
  font-family: 'LINESeedKR-Bd';
`;

const MySubTitle = styled.p`
  font-size: ${props => props.fontSize};
  text-decoration-line: underline;
`;

const MyTitleArea = styled.div`
  height: 10%;
  display: flex;
  align-items: center;
  margin: 10px;
  & > p {
    margin: 10px;
  }
`;

const MyProgressArea = styled.div`
  width: 100%;

  background-color: ${backColor};

  display: flex;
  justify-content: space-around;

  & > div {
    position: relative;
    border-radius: 5px;
    flex-shrink: 0;
    flex-grow: 1;
    margin: 5px 10px;
    height: 500px;
  }
`;

export default function Kanban() {
  /** 임시로 특정 워크스페이스(id가 0) 지정 */
  const workspaceList = useSelector(state => state.workspace.workspaceList)[0];
  const workflowList = workspaceList.workflow;
  const workflowProgressArr = [
    'todoList',
    'inprogressList',
    'inreviewList',
    'blockedList',
    'doneList',
  ];
  const workflowProgress = [
    'Request',
    'In Progress',
    'In Review',
    'Blocked',
    'Completed',
  ];
  const iconList = ['✉️', '🔨', '📌', '🔒', '🎉'];

  return (
    <div>
      <MyTitleArea>
        <MyTitle fontSize="25px">Workflow</MyTitle>
        <MySubTitle fontSize="14px">{workspaceList.name}</MySubTitle>
      </MyTitleArea>
      <MyProgressArea>
        {workflowProgressArr.map((e, idx) => {
          for (let i = 0; i < workflowList[e].length; i++) {
            console.log('id', workflowList[e][i].createDate);
          }

          return (
            <KanbanProgress
              key={idx}
              id={1}
              workflowList={workflowList[e]}
              progress={workflowProgress[idx]}
              icon={iconList[idx]}
            />
          );
        })}

        {/* <KanbanProgress
          workflowList={workflowList.todoList}
          progress="Request"
          icon={iconList[0]}
        />
        <KanbanProgress
          workflowList={workflowList.inprogressList}
          progress="In Progress"
          icon={iconList[1]}
        />
        <KanbanProgress
          workflowList={workflowList.inreviewList}
          progress="In Review"
          icon={iconList[2]}
        />
        <KanbanProgress
          workflowList={workflowList.blockedList}
          progress="Blocked"
          icon={iconList[3]}
        />
        <KanbanProgress
          workflowList={workflowList.doneList}
          progress="Completed"
          icon={iconList[4]}
        /> */}
      </MyProgressArea>
      {/* test */}
      <NewTask />
    </div>
  );
}

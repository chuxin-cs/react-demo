import styled from 'styled-components';

export default function MultiTabs() {
  return (
    <StyledMultiTabs>
      <h1>tabs</h1>
    </StyledMultiTabs>
  );
}

const StyledMultiTabs = styled.div`
  height: 100%;
  margin-top: 2px;

  .anticon {
    margin: 0px !important;
  }

  .ant-tabs {
    height: 100%;
    .ant-tabs-content {
      height: 100%;
    }
    .ant-tabs-tabpane {
      height: 100%;
      & > div {
        height: 100%;
      }
    }
  }

  .hide-scrollbar {
    overflow: scroll;
    scrollbar-width: none;
    -ms-overflow-style: none;
    will-change: transform;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

import styled from 'styled-components';

export const Loading = styled.div`
  color: #fff;
  font-size: 30px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const Owner = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;

  a {
    color: #0d7377;
    font-size: 16px;
    text-decoration: none;
  }

  img {
    width: 120px;
    border-radius: 50%;
    margin-top: 20px;
    border: 2px solid #eee;
  }

  h1 {
    font-size: 24px;
    margin-top: 10px;
  }

  p {
    margin-top: 5px;
    font-size: 14px;
    color: #323232;
    line-height: 1.4;
    text-align: center;
    max-width: 400px;
  }
`;

export const IssuesList = styled.ul`
  padding-top: 30px;
  margin-top: 30px;
  border-top: 1px solid #eee;
  list-style: none;

  li {
    display: flex;
    padding: 15px 10px;
    border: 1px solid #eee;
    border-radius: 4px;

    & + li {
      margin-top: 10px;
    }

    img {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      border: 2px solid #eee;
    }

    div {
      flex: 1;
      margin-left: 15px;

      strong {
        font-size: 16px;

        a {
          text-decoration: none;
          color: #212121;
          transition: all 0.4s;

          &:hover {
            color: #14ffec;
          }
        }

        span {
          background: #0d7377;
          color: #fff;
          border-radius: 2px;
          font-size: 12px;
          font-weight: 600;
          height: 20px;
          padding: 3px 4px;
          margin-left: 10px;
        }
      }

      p {
        margin-top: 5px;
        font-size: 12px;
        color: #999;
      }
    }
  }
`;

export const IssueFilter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;

  button {
    border: 1px solid #14ffec;
    margin: 0 5px;
    background: none;
    padding: 8px 16px;
    border-radius: 4px;
    font-weight: bold;
    transition: all 0.4s;

    &:hover {
      border: 1px solid #0d7377;
      background: #0d7377;
      color: #fff;
    }

    &.active {
      border: 1px solid #14ffec;
      background: #14ffec;
      color: #fff;
    }
  }
`;

export const IssuesPaginate = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;

  p {
    margin: 0 15px;
  }

  button {
    border: 1px solid #14ffec;
    margin: 0 5px;
    background: none;
    padding: 8px 16px;
    border-radius: 4px;
    font-weight: bold;
    transition: all 0.4s;
    background: #14ffec;
    color: #fff;

    &:hover {
      border: 1px solid #0d7377;
      background: #0d7377;
    }
  }
`;

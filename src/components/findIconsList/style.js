
import styled from 'styled-components';
import style from '../../assets/global-style';

export const NavContainer = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
    height: 5rem;
    align-items: center;
    padding: 10px 0;
`
export const ListItem = styled.div`
    height: 100%;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    align-items: center;
    color: #000;
  .icon {
    width: 2.6rem;
    height: 2.6rem;
    line-height: 2.6rem;
    border-radius: 50%;
    text-align: center;
    position: relative;
    color: #fff;
    background: linear-gradient(to right, #ff5a4c, #ff1d11);;
    .find {
        font-size: 25px
    }
  }
  .icon-text {
      font-size:13px
    }
`;
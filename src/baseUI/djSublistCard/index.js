import React from "react";
import styled from "styled-components";

const DjSublistCardStyle = styled.div`
  background-color: #fff;
  margin-top: 0.2rem;
  .title {
    font-weight: 700;
  }
  .card {
    margin-top: 1.2rem;
    height: 5.2rem;
    display: flex;
    align-items: center;
    .img-info {
      width: 5rem;
      height: 5rem;
      padding-bottom: 1rem;
      overflow: hidden;
      position: relative;
      &.circle {
        border-radius: 50%;
      }
      img {
        width: 5rem;
        height: 5rem;
      }
      &.bigImg {
        width: 2.8rem;
        padding-bottom: 1.4rem;
        img {
          width: 2.8rem;
          height: 1.4rem;
        }
      }
      .count {
        position: absolute;
        color: #fff;
        right: 5px;
        top: 5px;
        font-size: 0.13rem;
      }
    }
    .info {
      flex: 1;
      display: flex;
      flex-direction: column;
      margin-left: 0.2rem;
      .name {
        .twoLinesEllipsis();
      }
      .name,
      .artist,
      .text {
        line-height: 1.5;
      }
      .artist,
      .text {
        color: #999;
        font-size: 0.2rem;
      }
    }
    .icon {
      width: 1.4rem;
    }
  }
`;

export const DjSublistCard = props => {
  const { djSublist, type, title, count, enterDetail } = props;

  const numRule = value => {
    if (!value) return "";
    if (value > 10000) {
      value = parseInt(value / 10000) + "万";
    } else if (value > 100000000) {
      value = (value / 100000000).toFixed(1) + "亿";
    }
    return value;
  };

  const setTime = value => {
    if (!value) return "";
    let min = parseInt(value / (1000 * 60));
    if (min < 10) {
      min = "0" + min;
    }
    let sec = parseInt((value % (1000 * 60)) / 1000);
    if (sec < 10) {
      sec = "0" + sec;
    }
    value = `${min}:${sec}`;
    return value;
  };

  return (
    <DjSublistCardStyle>
      {title && (
        <h1 className="title">
          {title}
          <span className="num">({count})</span>
        </h1>
      )}
      {/* 要遍历的数组 */}
      {djSublist.map((item, index) => {
        return (
          <div
            className="card"
            key={index}
            onClick={() => enterDetail(item.id)}
          >
            <div className="img-info">
              {/* 列表项图片信息 */}
              <img src={item.picUrl ? item.picUrl : item.coverUrl} />
              {item.playTime && (
                <span className="count">
                  <i className="dj_sublist dj_sublist_bofang1"></i>
                  {item.playTime | numRule()}
                </span>
              )}
            </div>
            {type === "dj" && (
              <div className="info">
                {/* 列表项名字 */}
                <p className="name">{item.name}</p>
                {/* 作者名字  */}
                <p className="artist">by {item.dj.nickname}</p>
                {/* 其他信息  */}
                <p className="text">{item.lastProgramName}</p>
              </div>
            )}
            {type == "albums" && (
              <div className="info">
                {/*  列表项名字 */}
                <p className="name">{item.name}</p>
                {/* 作者名字 */}
                <div>
                  {item.artists.map((item, index) => {
                    <div>
                      <span className="artist" key="index">
                        {item.name}
                      </span>
                      {/* 其他信息 */}
                      <span className="text">{item.size}首</span>
                    </div>;
                  })}
                </div>
              </div>
            )}
            {type == "artists" && (
              <div className="info">
                {/*列表项名 */}
                <p className="name">{item.name}</p>
                {/* 作者名 */}
                <div>
                  <span className="artist">专辑：{item.albumSize}</span>
                  {/* 其他信息 */}
                  <span className="text">MV：{item.mvSize}</span>
                </div>
              </div>
            )}
            {type == "video" && (
              <div className="info">
                {/* 列表项名字 */}
                <p className="name">{item.title}</p>
                {/*  作者名字 */}
                <div>
                  <span className="artist">
                    {item.durationms | setTime()} by
                  </span>
                  {/* 其他信息*/}
                  {item.creator.map((item, index) => {
                    <span className="text" key={index}>
                      {item.userName}
                    </span>;
                  })}
                </div>
              </div>
            )}
            {/* 右边的三个点按钮  */}
            <div className="icon">
              <i className="dj_sublist dj_sublist_diandian"></i>
            </div>
          </div>
        );
      })}
    </DjSublistCardStyle>
  );
};

// export default DjSublistCard;

{
  /* <script>
export default {
  name: '',
  props: {
    djSublist: {
      type: Array
    },
    count: {
      type: Number
    },
    title: {
      type: String
    },
    type: {
      type: String
    },
    circle: {
      type: Boolean
    },
    bigImg: {
      type: Boolean
    }
  },
</script>

<style lang='less' scoped>
@import url("//at.alicdn.com/t/font_1443044_ba7y88tq60o.css");
@import url("~styles/global.less");
.dj_sublist_bofang1 {
  font-size: 0.13rem;
  color: #fff;
}

.dj_sublist_card {
  background-color: #fff;
  margin-top: 0.2rem;
  .title {
    font-weight: 700;
  }
  .card {
    margin-top: 0.2rem;
    height: 1.2rem;
    display: flex;
    align-items: center;
    .img-info {
      width: 1rem;
      height: 0;
      padding-bottom: 1rem;
      overflow: hidden;
      position: relative;
      &.circle {
        border-radius: 50%;
      }
      img {
        width: 1rem;
        height: 1rem;
      }
      &.bigImg {
        width: 2.8rem;
        padding-bottom: 1.4rem;
        img {
          width: 2.8rem;
          height: 1.4rem;
        }
      }
      .count {
        position: absolute;
        color: #fff;
        right: 5px;
        top: 5px;
        font-size: 0.13rem;
      }
    }
    .info {
      flex: 1;
      display: flex;
      flex-direction: column;
      margin-left: 0.2rem;
      .name {
        .twoLinesEllipsis();
      }
      .name,
      .artist,
      .text {
        line-height: 1.5;
      }
      .artist,
      .text {
        color: #999;
        font-size: 0.2rem;
      }
    }
    .icon {
      width: 0.4rem;
    }
  }
}
</style> */
}

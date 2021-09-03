import React from "react";

const HuePhuong = () => {
  const commentData = [
    {
      name: "Long",
      text: "Suspendisse imperdiet, magna et scelerisque placerat, est lorem iaculis odio, placerat faucibus libero",
    },
  ];
  return (
    <>
      <div className="post-open-box mt_30">
        <h3 className="head-sub-text">Hue Phuong</h3>
        <span className="gmail-text">Huephuong@gmail.com</span>
        <p className="color-three mt_30">
          Nullam finibus eleifend mi, eget finibus risus. Donec dictum cursus
          vestibulum. Interdum et malesuada fames ac ante ipsum primis in
          faucibus. Praesent luctus sodales lorem. Vestibulum et facilisis
          tellus. Nam gravida pellentesque dolor id blandit. Vivamus volutpat
          quam at velit ultricies, accumsan lobortis dui cursus.
        </p>
        <div className="like-box">
          <a className="like-icon" href="#">
            <svg
              width={22}
              height={26}
              viewBox="0 0 22 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.373 13.551C18.7141 12.9874 18.9029 12.2967 18.9029 11.5782C18.9029 10.4381 18.3933 9.35904 17.5731 8.75728C17.3619 8.60239 17.1215 8.52086 16.8767 8.52115H12.0082L12.13 5.40064C12.1584 4.64654 11.9452 3.93052 11.5311 3.38463C11.3278 3.11556 11.0826 2.90148 10.8106 2.75561C10.5385 2.60975 10.2455 2.5352 9.94951 2.53658C8.89378 2.53658 7.95986 3.42525 7.67969 4.69732L5.9357 12.5938H3.31058C2.95123 12.5938 2.6609 12.9569 2.6609 13.4063V22.6485C2.6609 23.0979 2.95123 23.461 3.31058 23.461H15.5185C15.7053 23.461 15.888 23.4153 16.0565 23.3239C17.0229 22.8085 17.6462 21.6278 17.6462 20.3176C17.6462 19.9977 17.6097 19.6829 17.5366 19.3782C17.8776 18.8145 18.0665 18.1239 18.0665 17.4053C18.0665 17.0854 18.0299 16.7706 17.9568 16.4659C18.2979 15.9022 18.4867 15.2116 18.4867 14.493C18.4827 14.1731 18.4461 13.8557 18.373 13.551ZM4.12269 21.6329V14.4219H5.76719V21.6329H4.12269ZM17.0432 12.67L16.5986 13.1524L16.8808 13.7973C16.9738 14.0098 17.022 14.2483 17.0209 14.4905C17.0209 14.9094 16.8747 15.3081 16.623 15.5823L16.1783 16.0647L16.4605 16.7096C16.5535 16.9221 16.6017 17.1606 16.6006 17.4028C16.6006 17.8217 16.4544 18.2204 16.2027 18.4946L15.7581 18.977L16.0403 19.6219C16.1332 19.8344 16.1815 20.0729 16.1804 20.3151C16.1804 20.8838 15.9124 21.3967 15.4982 21.6303H7.06655V14.3407L9.08665 5.18736C9.13874 4.95275 9.25056 4.74577 9.40517 4.59778C9.55977 4.44979 9.74873 4.36886 9.94342 4.36724C10.0977 4.36724 10.25 4.4231 10.3718 4.53736C10.5728 4.72525 10.6804 5.00963 10.6682 5.31177L10.4733 10.3493H16.8564C17.2178 10.626 17.4411 11.0932 17.4411 11.5782C17.4411 11.9971 17.295 12.3932 17.0432 12.67Z"
                fill="#FDA700"
              />
            </svg>
            <span>148k</span>
          </a>
        </div>
        <form action="#" className="comment-box mt_20 position-relative">
          <textarea placeholder="Write a comment....." defaultValue={""} />
          <button className="send-btn">Send</button>
        </form>
        {commentData.map((data, index) => {
          return (
            <div key={index} className="comment-reply mt_25">
              <h3 className="head-sub-text">{data.name}</h3>
              <p>{data.text}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default HuePhuong;

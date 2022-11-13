import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleLg">Grocery Watch</span>
      </div>
      <img
        className="headerImg"
        src="https://pnptc-media.s3.amazonaws.com/images/header_photo.2e16d0ba.fill-600x400.jpg"
        alt=""
      />
    </div>
  );
}

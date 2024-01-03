export default function Card({ children, title, link, imgLink, ...props }) {
  return (
    <div {...props}>
      <img src={imgLink} />
      <h1>{title}</h1>
      <a href={link}>GitHub Link</a>
      {children}
    </div>
  );
}

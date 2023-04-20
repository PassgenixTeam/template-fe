import style from "./style.module.scss";

export default function HomePage({}: HomeProps) {
  return (
    <div className="position-relative bg-light overflow-hidden">
      <h1 className={style["title"]}>HOME</h1>
    </div>
  );
}

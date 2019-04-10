import React from 'react';

export default function Card({
  text,
  link
}) {
  return (
    <div className="body--grey clearfix">
      <section className="card clearfix">
        <a href={link}>
          <div className="o-box">
            <h2 className="title title--secondary">
              {text}
            </h2>
          </div>
        </a>
      </section>
    </div>
  );
}

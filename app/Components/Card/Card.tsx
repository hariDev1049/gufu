import { useState } from 'react';

const Card = ({ recipe }: { recipe: any }) => {
  const [element, setElement] = useState(recipe);

  function removeHtmlTags(str: String) {
    return str.replace(/<[^>]*>/g, '');
  }

  return (
    <div className=" bg-yellow-200 flex flex-col">
      <div className="py-2 font-bold">
        {' '}
        <h3>{element.title}</h3>
      </div>
      <p>{removeHtmlTags(element.summary)}</p>
    </div>
  );
};

export default Card;

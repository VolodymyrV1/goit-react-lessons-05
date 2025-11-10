import { useState } from "react";

import s from "./TagManadger.module.scss";

const TAGS = [
  "Apple",
  "Microsoft",
  "Microsemi",
  "MetaBank",
  "Meta",
  "Netflix",
  "Google",
  "Nvidia",
];


function TagManager() {
    const [tags, setTags] = useState<string[]>(TAGS);
    const [search, setSearch] = useState<string>("");

    const handleTagRemove = (tagName: string) => {
        setTags(prevTags => prevTags.filter(tag => tag != tagName))
        
    }

    const hanleSearchChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value);
        
    };
    
    const filteredTags = tags.filter(tag => tag.toLocaleUpperCase().includes(search.toLocaleUpperCase()));

    return (
        <div>
            <input placeholder="Search" value={search} onChange={hanleSearchChange} />
            <div className={s.container}>
                {filteredTags.map(tag => (
                    <span key={tag} className={s.tag}>
                        {tag}<button onClick={() => handleTagRemove(tag)}>&times;</button>
                    </span>
                ))}   
            </div>
        </div>    
    )
}

export default TagManager;
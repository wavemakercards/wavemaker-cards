import Dexie from 'dexie';
import 'dexie-observable';
const db = new Dexie('wavemaker');
db.version(1).stores({
    Settings : `$$uuid, settings, lastupdated`,
    Writer : `$$uuid,title, author, description, files, lastupdated`,
    ManuscriptCards: `$$uuid,title,content,lastupdated`,
    Cards: `$$uuid,title,content,style,labels,options,lastupdated`,
    Snowflake : `$$uuid,title, description,content,lastupdated`,
    Timeline : `$$uuid,title, description,content,lastupdated`,
    Gridplanner : `$$uuid,title, description,content,lastupdated`,
    Mindmap : `$$uuid,title, description,content,lastupdated`,
});
/* 
The observable elements are set up in main.js
*/

export default db;
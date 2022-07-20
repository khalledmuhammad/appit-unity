export const  truncate = (string, limit)=> {
    if(string.length > limit) string =  string.substr(0, limit) 
    return string
  }
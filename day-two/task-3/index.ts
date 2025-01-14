type sourseData = {
    title: string,
    year: number,
    author: string
}

type targetData = {
    title: string,
    year: number,
    author: string,
    preview: string,
    url: string

}

const info: sourseData = {
    title: "Harry Potter",
    year: 1997,
    author: "J.K. Rowling",
};

function createBook(title: string,year: number,author: string): targetData {
    return {
        title,
        year,
        author,
        preview: `Название: ${title}, Автор: ${author}, Год: ${year}`,
        url: `www.someurl.com/preview?title=${title}&year=${year}&author=${author}`
    }

}

console.log(createBook(info.title, info.year, info.author))



// Выходные данные:
// type targetData = {
//   title: "Harry Potter",
//   year: 1997,
//   author: "J.K. Rowling",
// 	preview: "Название: [title], Автор: [author], Год: [year]",
// 	url: "www.someurl.com/preview?title=[title]&year=[year]&author=[author]"
// };


const KEY = '?client_id=4ee8ae5d2575beb9aef84583621aa1255f710d3c2ddff2f6bf5f77f5919c2f1f';
const URL = `https://api.unsplash.com/photos/`;

const fetchImages = async page => {
    const response = await fetch(`${URL}${KEY}&per_page=10&page=${page}`);
    const data = await response.json();
    if (response.status >= 400) {
        throw new Error(data.errors);
    }
    return data;

};
export default fetchImages;

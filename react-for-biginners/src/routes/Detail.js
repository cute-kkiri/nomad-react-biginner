import { useEffect } from "react";
import { useParams } from "react-router-dom";

function Detail() {
    /* const x = useParams(); { id: id값 } // 넘어온 변수들이 들어오는 듯?
    console.log(x); */

    const { id } = useParams(); // 넘어온 변수들 중 id변수명으로 선언한 것이 넘어옴.
    // console.log(id);
    const getMovie = async () => {
        const json = await (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
        console.log(json);
    }

    useEffect(() => {
        getMovie();
    }, []);

    return <h1>Detail</h1>;
}

export default Detail;
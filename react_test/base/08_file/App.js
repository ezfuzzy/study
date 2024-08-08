import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useRef, useState } from "react";
import { Button, Container } from "react-bootstrap";
import axios from "axios";
function App() {
  const inputImage = useRef();
  const inputFile = useRef();
  const inputImage2 = useRef();
  const inputTitle = useRef();
  const [imageData, setImageData] = useState({});
  const [fileData, setFileData] = useState({
    orgFileName: "",
    savedFileName: "",
    fileSize: 0,
    url: "",
  });
  const [imageData2, setImageData2] = useState({});
  const [previewImage, setPreviewImage] = useState(null);

  const imgStyle = {
    width: "200px",
    borderRadius: "10px",
  };

  const handleUploadImage = () => {
    const uploadedImage = inputImage.current.files[0];

    const formData = new FormData();
    formData.append("image", uploadedImage);

    axios
      .post("/image/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(res.data);
        setImageData(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleUploadFile = () => {
    const uploadedFile = inputFile.current.files[0];

    const formData = new FormData();
    formData.append("file", uploadedFile);

    axios
      .post("/file/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        const url = `http://localhost:8888/file/download?orgFileName=${res.data.orgFileName}&savedFileName=${res.data.savedFileName}&fileSize=${res.data.fileSize}`;
        setFileData({
          orgFileName: res.data.orgFileName,
          savedFileName: res.data.savedFileName,
          fileSize: res.data.fileSize,
          url,
        });
      })
      .catch((error) => console.log(error));
  };

  const handleOnChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setPreviewImage(reader.result);
        console.log(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      console.log("no file");
      setPreviewImage(null);
    }
  };

  const handleUploadImage2 = () => {
    const uploadedImage = inputImage2.current.files[0];

    const formData = new FormData();
    formData.append("image", uploadedImage);
    formData.append("title", inputTitle.current.value);

    axios
      .post("/image/upload2", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(res.data);
        setImageData2(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Container>
      <h1>인덱스 페이지 입니다</h1>
      <Button
        variant="success"
        onClick={() => {
          console.log("imageData: ", imageData);
          console.log("imageData2: ", imageData2);
          console.log("fileData: ", fileData);
          console.log("inputImage2 : ", inputImage2);
        }}>
        get data
      </Button>
      <h3 className="my-4">### image test ###</h3>
      <div>
        <input ref={inputImage} type="file" accept="image/*" />
        <Button onClick={handleUploadImage} variant="info">
          upload
        </Button>
        <p>
          uploaded file name : <strong>{imageData.orgFileName}</strong>
        </p>
        {imageData.savedFileName && <img src={`/upload/images/${imageData.savedFileName}`} alt="uploaded img" />}
      </div>
      <h3 className="my-5">### file test ###</h3>
      <div>
        <input ref={inputFile} type="file" />
        <Button onClick={handleUploadFile} variant="secondary">
          upload
        </Button>
        {fileData.fileSize !== 0 && (
          <div>
            <p>
              원본 파일명 : <strong>{fileData.orgFileName}</strong>
            </p>
            <p>
              저장된 파일명 : <strong>{fileData.savedFileName}</strong>
            </p>
            <p>
              파일 크기 : <strong>{fileData.fileSize} Byte</strong>
            </p>
            <a href={fileData.url}>download</a>
          </div>
        )}
      </div>
      <h3 className="my-5">### image test ###</h3>
      <p>이미지 선택 - preview</p>
      <input ref={inputTitle} type="text" placeholder="title ..." />
      <br />
      <input ref={inputImage2} type="file" accept="image/*" onChange={handleOnChange} />
      <br />
      {previewImage && <img src={previewImage} alt="preview" style={imgStyle}/>} <br />
      <Button onClick={handleUploadImage2}>upload</Button>
      <p>
        uploaded file name : <strong>{imageData2.orgFileName}</strong>
      </p>
      {imageData2.savedFileName && (
        <>
          <p>{imageData2.title}</p>
          <img src={`/upload/images/${imageData2.savedFileName}`} alt="uploaded img" />
        </>
      )}
    </Container>
  );
}

export default App;

import React, {useEffect, useState} from "react";
import Card from "../../components/card/card";
import {Watch} from "../../interfaces/interfaces";
import styles from "./dashBoardFormStyles.module.css";
import {useNavigate, useParams} from "react-router-dom";
import FormImages from "../../components/form img component/FormImages";

export default function DashBoardForm() {
    const navigate = useNavigate();
    const {id} = useParams();

    const [selectedFile, setSelectedFile] = useState<any>([]);
    const [preview, setPreview] = useState<any>();
    const [watch, setWatch] = useState<Watch>({
        id: 0,
        attributes: {
            code: "",
            model: "",
            maker: "",
            price: 0,
            referenceNumber: "",
            movement: "",
            material: "",
            diameter: 0,
            colorDial: "",
            watchBand: "",
            papers: "",
            box: "",
            year: "",
            condition: "",
            description: "",
            img: "",
            imgLinks: [],
            published:false
        }
    });

    useEffect(() => {
        id && fetch(`https://shielded-depths-59676.herokuapp.com/api/watches/${id}`)
            .then(res => res.json())
            .then(data => {
                setWatch(data.data)
            })
    }, []);

    useEffect(() => {
        if (!selectedFile[0]) {
            setPreview(preview);
        }

        if (selectedFile[0]) {
            setPreview(URL.createObjectURL(selectedFile[0]));
        }
        let links = selectedFile.map((item: any) => URL.createObjectURL(item));
        watch.attributes.imgLinks = links;
        setWatch(watch)
    }, [selectedFile]);

    const onSelectFile = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        // @ts-ignore
        setSelectedFile(prevSelectedFile => [...prevSelectedFile, ...files]);
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();

        const formData = new FormData();
        for (let i = 0; i < selectedFile.length; i++) {
            formData.append(`files`, selectedFile[i]);
        }

        fetch("https://shielded-depths-59676.herokuapp.com/api/upload", {
            method: 'POST',
            body: formData
        })
            .then((response) => response.json())
            .then(res => {
                setSelectedFile([]);
                let imgLinks = res.map((img: any) => img.url);
                if(!watch.attributes.img){
                    watch.attributes.img = imgLinks[0];
                    watch.attributes.imgLinks = imgLinks;
                }else{
                    watch.attributes.imgLinks = imgLinks.concat(watch.attributes.imgLinks);
                }

                setWatch({
                    ...watch, attributes: {
                        ...watch.attributes,
                        img: watch.attributes.img,
                        imgLinks: watch.attributes.imgLinks
                    }
                })

                fetch(`https://shielded-depths-59676.herokuapp.com/api/watches${id ? `/${id}` : ""}`, {
                    // Adding method type
                    method: id ? "PUT" : "POST",
                    headers: {"Content-Type": "application/json"},
                    // Adding body or contents to send
                    body: JSON.stringify({data: watch.attributes})
                }).then(() => console.log("success"));
            })
            .catch((error) => {
                //handle error
                fetch(`https://shielded-depths-59676.herokuapp.com/api/watches${id ? `/${id}` : ""}`, {
                    // Adding method type
                    method: id ? "PUT" : "POST",
                    headers: {"Content-Type": "application/json"},
                    // Adding body or contents to send
                    body: JSON.stringify({data: watch.attributes})
                }).then(() => console.log("success"));
                console.log(error, ' ERROR !!!')
            })
            navigate("/dashboard")

    }
  
    function handelImgDelete(item: string) {
        setWatch({
            ...watch, attributes: {
                ...watch.attributes,

                imgLinks: watch.attributes.imgLinks && Object.values(watch.attributes.imgLinks).filter(str => str != item)
            }
        })
       

    }

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-1 d-none d-lg-block mx-3 mt-3">
                    <button className="btn" onClick={() => navigate("/dashboard")}>Go Back</button>
                </div>
            </div>
            <div className="row p-4">
                <div className="col col-md-7 col-lg-9 ">
                    <form
                        action="#"
                        onSubmit={handleSubmit}
                        className="needs-validation "
                    >
                        <div className="row align-items-center">
                            <div className="form-group my-2 col-12 col-lg-6">
                                <label htmlFor="watchCode">Watch code</label>
                                <input
                                    type="text"
                                    defaultValue={watch.attributes.code}
                                    className={`form-control shadow-none  ${
                                        watch?.attributes.code ? "" : styles.error
                                    }`}
                                    id="watchCode"
                                    placeholder="Watch code"
                                    onChange={(e) =>
                                        setWatch({
                                            ...watch, attributes: {
                                                ...watch.attributes,
                                                code: e.target.value
                                            }
                                        })
                                    }
                                />
                            </div>
                            <div className="form-group my-2 col-12 col-lg-6">
                                <label htmlFor="watchMaker">Brand</label>
                                <input
                                    type="text"
                                    defaultValue={watch.attributes.maker}
                                    className={`form-control shadow-none  ${
                                        watch?.attributes.maker ? "" : styles.error
                                    }`}
                                    id="watchMaker"
                                    placeholder="Watch Brand"
                                    onChange={(e) =>
                                        setWatch({
                                            ...watch, attributes: {
                                                ...watch.attributes,
                                                maker: e.target.value
                                            }
                                        })
                                    }
                                />
                            </div>
                            <div className="form-group my-2 col-12 col-lg-6">
                                <label htmlFor="watchModel">Watch Model</label>
                                <input
                                    type="text"
                                    defaultValue={watch.attributes.model}
                                    className={`form-control shadow-none  ${
                                        watch?.attributes.model ? "" : styles.error
                                    }`}
                                    id="watchModel"
                                    placeholder="Watch Model"
                                    onChange={(e) =>
                                        setWatch({
                                            ...watch, attributes: {
                                                ...watch.attributes,
                                                model: e.target.value
                                            }
                                        })
                                    }
                                />
                            </div>
                            <div className="form-group my-2 col-12 col-lg-6">
                                <label htmlFor="watchPrice">Watch Price</label>
                                <input
                                    type="number"
                                    defaultValue={watch.attributes.price?.toLocaleString()}
                                    className={`form-control shadow-none  ${
                                        watch?.attributes.price ? "" : styles.error
                                    }`}
                                    id="watchPrice"
                                    placeholder="Watch Price"
                                    onChange={(e) =>
                                        setWatch({
                                            ...watch, attributes: {
                                                ...watch.attributes,
                                                price: e.target.valueAsNumber
                                            }
                                        })
                                    }
                                />
                            </div>
                            <div className="form-group my-2 col-12 col-lg-6">
                                <label htmlFor="watchReferenceNumber">
                                    Watch Reference Number
                                </label>
                                <input
                                    type="text"
                                    defaultValue={watch.attributes.referenceNumber}
                                    className={`form-control shadow-none  ${
                                        watch?.attributes.referenceNumber ? "" : styles.error
                                    }`}
                                    id="watchReferenceNumber"
                                    placeholder="Watch Reference Number"
                                    onChange={(e) =>
                                        setWatch({
                                            ...watch, attributes: {
                                                ...watch.attributes,
                                                referenceNumber: e.target.value
                                            }
                                        })
                                    }
                                />
                            </div>
                            <div className="form-group my-2 col-12 col-lg-6">
                                <label htmlFor="watchMovement">Watch Movement Type</label>
                                <input
                                    type="text"
                                    defaultValue={watch.attributes.movement}
                                    className={`form-control shadow-none  ${
                                        watch?.attributes.movement ? "" : styles.error
                                    }`}
                                    id="watchMovement"
                                    placeholder="Watch Movement Type"
                                    onChange={(e) =>
                                        setWatch({
                                            ...watch, attributes: {
                                                ...watch.attributes,
                                                movement: e.target.value
                                            }
                                        })
                                    }
                                />
                            </div>
                            <div className="form-group my-2 col-12 col-lg-6">
                                <label htmlFor="watchMaterial">Case Material Type</label>
                                <input
                                    type="text"
                                    defaultValue={watch.attributes.material}
                                    className={`form-control shadow-none  ${
                                        watch?.attributes.material ? "" : styles.error
                                    }`}
                                    id="watchMaterial"
                                    placeholder="Watch Material Type"
                                    onChange={(e) =>
                                        setWatch({
                                            ...watch, attributes: {
                                                ...watch.attributes,
                                                material: e.target.value
                                            }
                                        })
                                    }
                                />
                            </div>
                            <div className="form-group my-2 col-12 col-lg-6">
                                <label htmlFor="watchDiametar">Watch Diameter</label>
                                <input
                                    type="number"
                                    defaultValue={watch.attributes.diameter}
                                    className={`form-control shadow-none  ${
                                        watch?.attributes.diameter ? "" : styles.error
                                    }`}
                                    id="watchDiametar"
                                    placeholder="Watch Diameter"
                                    onChange={(e) =>
                                        setWatch({
                                            ...watch, attributes: {
                                                ...watch.attributes,
                                                diameter: e.target.valueAsNumber
                                            }
                                        })
                                    }
                                />
                            </div>
                            <div className="form-group my-2 col-12 col-lg-6">
                                <label htmlFor="watchDialColor">Watch Dial Color</label>
                                <input
                                    type="text"
                                    defaultValue={watch.attributes.colorDial}
                                    className={`form-control shadow-none  ${
                                        watch?.attributes.colorDial ? "" : styles.error
                                    }`}
                                    id="watchDialColor"
                                    placeholder="Watch Dial Color"
                                    onChange={(e) =>
                                        setWatch({
                                            ...watch, attributes: {
                                                ...watch.attributes,
                                                colorDial: e.target.value
                                            }
                                        })
                                    }
                                />
                            </div>
                            {/* <div className="form-group my-2 col-12 col-lg-6">
                                <label htmlFor="watchBand">Watch Band</label>
                                <input
                                    type="text"
                                    defaultValue={watch.attributes.watchBand}
                                    className={`form-control shadow-none  ${
                                        watch?.attributes.watchBand ? "" : styles.error
                                    }`}
                                    id="watchBand"
                                    placeholder="Watch Band"
                                    onChange={(e) =>
                                        setWatch({
                                            ...watch, attributes: {
                                                ...watch.attributes,
                                                watchBand: e.target.value
                                            }
                                        })
                                    }
                                />
                            </div> */}
                            <div className="form-group my-2 col-12 col-lg-6">
                                <label htmlFor="watchYear">Watch Production Year</label>
                                <input
                                    type="text"
                                    defaultValue={watch.attributes.year}
                                    className={`form-control shadow-none  ${
                                        watch?.attributes.year ? "" : styles.error
                                    }`}
                                    id="watchYear"
                                    placeholder="Watch Production Year"
                                    onChange={(e) =>
                                        setWatch({
                                            ...watch, attributes: {
                                                ...watch.attributes,
                                                year: e.target.value
                                            }
                                        })
                                    }
                                />
                            </div>
                            <div className="form-group my-2 col-12 col-lg-6">
                                <label htmlFor="watchCodition">Watch Codition</label>
                                <input
                                    type="text"
                                    defaultValue={watch.attributes.condition}
                                    className={`form-control shadow-none  ${
                                        watch?.attributes.condition ? "" : styles.error
                                    }`}
                                    id="watchCodition"
                                    placeholder="Watch Codition"
                                    onChange={(e) =>
                                        setWatch({
                                            ...watch, attributes: {
                                                ...watch.attributes,
                                                condition: e.target.value
                                            }
                                        })
                                    }
                                />
                            </div>
                         
                           
                            <div className="form-group my-2 col-12 col-lg-6">
                                <label htmlFor="watchPapers" className="mx-2">
                                    Papers
                                </label>
                                <input
                                    type="text"
                                    defaultValue={watch.attributes.papers}
                                    className={`form-control shadow-none  ${
                                        watch?.attributes.papers ? "" : styles.error
                                    }`}
                                    id="watchPapers"
                                    onChange={(e) =>
                                        setWatch({
                                            ...watch, attributes: {
                                                ...watch.attributes,
                                                papers: e.target.value
                                            }
                                        })
                                    }
                                />
                            </div>
                            <div className="form-group my-2 col-12 col-lg-6">
                                <label htmlFor="watchBox" className="mx-2">
                                    Box
                                </label>
                                <input
                                    type="text"
                                    defaultValue={watch.attributes.box}
                                    className={`form-control shadow-none  ${
                                        watch?.attributes.box ? "" : styles.error
                                    }`}
                                    id="watchBox"
                                    onChange={(e) =>
                                        setWatch({
                                            ...watch, attributes: {
                                                ...watch.attributes,
                                                box: e.target.value
                                            }
                                        })
                                    }
                                />
                            </div>
                            <div className="form-group my-2 col-12 col-lg-6">
                                <label htmlFor="watchDescription">Watch Description</label>
                                <textarea
                                    className={`form-control shadow-none  ${
                                        watch?.attributes.description ? "" : styles.error
                                    }`}
                                    defaultValue={watch.attributes.description}
                                    id="watchDescription"
                                    placeholder="Watch Description..."
                                    onChange={(e) =>
                                        setWatch({
                                            ...watch, attributes: {
                                                ...watch.attributes,
                                                description: e.target.value
                                            }
                                        })
                                    }
                                />
                            </div>
                            <div className="form-group my-2 col-12 col-lg-6">
                                <input
                                    type="file"
                                    multiple
                                    onChange={onSelectFile}
                                    className="form-control shadow-none -file "
                                />
                            </div>
                            {watch.attributes.imgLinks && Object.values(watch.attributes.imgLinks).map(item => (
                                <div key={new Date().valueOf()} onClick={() => handelImgDelete(item)}
                                     className="form-group my-2  col-lg-6">
                                        {
                                            item.includes('blob:') ? 
                                            <FormImages img={item}/>
                                            :
                                            <FormImages img={"https://shielded-depths-59676.herokuapp.com" + item}/>
                                        }
                                        {
                                            !item.includes('blob:') && <p>{item}</p>
                                        }
                                </div>
                            ))}
                           
                            <button className="btn bg-dark-custom text-white">
                                Create Watch
                            </button>
                        </div>
                    </form>
                </div>
                <div className="col-12 col-md-5 col-lg-3">
                    <Card img={preview} watchData={watch}/>
                </div>
            </div>
        </div>
    );
}

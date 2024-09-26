import React , {useEffect,useContext,useState,useCallback}from "react";
import { useRouter } from "next/router";
import { useDropzone } from "react-dropzone";
import { VotingContext } from "../context/Voter";
import Style from "../styles/allowedVoter.module.css";
import Image from "next/image";
import images from "../assets"
import Button from "../components/Button/Button";
import Input from "../components/Input/Input";
const allowedVoters = () => {
  const [fileUrl,setFileUrl] =useState(null);
  const[formInput,setformInput] = useState({
    name: "",
    image: null,
    ipfs: null,
  });
  const router =useRouter();
  const {uploadToIPFS,createVoter} =useContext(VotingContext);
  // Handle file drop and upload to IPFS
  const onDrop = useCallback(async (acceptedFiles) => {
    if (acceptedFiles.length === 0) {
      console.log("No files accepted");
      return;
    }

    const selectedFile = acceptedFiles[0];
    const url = await uploadToIPFS(selectedFile);

    if (url) {
      setFileUrl(url);
      setformInput({ ...formInput, image: url, ipfs: url }); // Update form input with the image URL and IPFS
    }
    console.log(url);
  }, [uploadToIPFS, formInput]);

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop,
    maxSize: 5000000, // 5 MB
    onDropRejected: (fileRejections) => {
      alert("File Rejected:", fileRejections.map(file => file.errors[0].message).join(", "));
    }
  });

  return (
  <div className={Style.createVoter}>
      <div>
      {fileUrl && (
          <div className={Style.voterInfoBox}>
            <div className={Style.imageContainer}>
              <Image
                src={formInput.image} // Updated image URL
                alt="VoterImage"
                width={180}
                height={180}
              />
            </div>
            <div className={Style.voterInfo_para}>
              <p>Name: {formInput.name|| "Enter name below"}</p>
            </div>
          </div>
        )}
{
  !fileUrl &&(
    <div className={Style.sideInfo}>
     <div className={Style.sideInfo_box}>
      <h4>
        Create Candidate For Voting
      </h4>
      <p>
We Vote is a Blockchain voting system
      </p>
      <p className={Style.sideInfo_para}>
      Name: {formInput.name}
      </p>

    
    </div>

    </div>
  )
}
      </div>
      <div className={Style.voter}>
        <div className={Style.voter_container}>
          <h1>
            Create Candidate For Voting
          </h1>
          <div className={Style.voter_container_box} 
          >
              <div className={Style.voter_container_box_div} 
          >
            <div {...getRootProps()}>
              <input {...getInputProps()} />
<div className={Style.voter_container_box_div_input}>
<p>
  Choose Image for Voting and Select Image within JPG,PNG
   </p> 

    <div className={Style.voter_container_box_div_image}>
      <Image  alt="File Upload" src={images.upload} width={150} height={150} />

    </div>
    <p>Drag and Drop File 
      </p>

    </div>            </div>
            

          </div>

          </div>

        </div>
        <div className={Style.input_container}>
<Input inputType ="text" title="Name" placeholder="Voter Name"
onChange={(e) => setformInput({ ...formInput, name: e.target.value })}
handleClick={(e)=>setformInput({...formInput,name:e.target.value})}
 // Use onChange directly here

/>
        </div>
        
       
        <div className={Style.input_container1}>

<div>

  <Button btnName="Authrourized Voter" title="Submit" handleClick={()=>createVoter(formInput.name,formInput.image,formInput.ipfs)}
  
  />
  




  
</div>
        </div>

      </div>
    

  </div>

)
};
export default allowedVoters; 
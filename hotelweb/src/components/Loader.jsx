import { CircularProgress } from "@mui/material";


const Loader = () => {
  return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <CircularProgress />
    </div>
    )
};

export default Loader;
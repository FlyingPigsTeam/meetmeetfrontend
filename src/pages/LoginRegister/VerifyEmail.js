import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { BASEURL } from "../../data/BASEURL";

function VerifyEmail() {
  const Navigate = useNavigate();
  // const [flag, setflag] = useState(false);
  // const [err, seterr] = useState("");
  const queryString = window.location.href;
  const urlParams = new URL(queryString).searchParams;
  const token1 = urlParams.get("token");
  useEffect(() => {
    gettoken();
  }, []);

  let gettoken = async () => {
    let response = await fetch(
      BASEURL + "/auth/email-verify/?" +
        new URLSearchParams({
          token: token1,
        }),
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    if (response.status === 200) {
      //setflag(true);
      swal("success!", "email verified", "success");
      Navigate("/login");
    } else {
      //seterr(data.error);
      swal("Error!", data.error, "error");
    }
  };
  return (
    <div>
      {/* {flag ? (
        <div>
          <p>email verified</p>
          <Link to="/login">login</Link>
        </div>
      ) : (
        <p>{err}</p>
      )} */}
    </div>
  );
}

export default VerifyEmail;

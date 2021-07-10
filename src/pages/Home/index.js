import React, { useEffect, useState, Fragment } from "react";
import "antd/dist/antd.css";
import { Spin, Space } from "antd";
//import store from "../../store/store";

import Categories from "./Categories";
import axios from "axios";

const Home = (props) => {
  const [dealList, setDealList] = useState([]);
  const [reduxdealList, setreduxDealList] = useState([]);
  const [clauseList, setClauseList] = useState([]);
  const [dealDetails, setDealDetails] = useState(null);
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    //effect
    getDealList();
    return () => {
      //cleanup
    };
  }, []);
  //Get all deal list From API and bind to UI
  const getDealList = async () => {
    try {
      setShowLoader(true);
      let url = "https://bakesaleforgood.com/api/deals";
      let result = await axios.get(url);
      setDealList(result.data);
      setreduxDealList(result.data);
      let uniqClauselist = [...new Set(result.data.map(item => item.cause.name))];
      setClauseList(uniqClauselist);
      setShowLoader(false);
    } catch (error) {
      setShowLoader(false);
      console.log("deal list error ------->", error);
    }
  };
  //Get all deal details From API and bind to UI
  const selectDeal = async (key) => {
    try {
      setShowLoader(true);
      let url = "https://bakesaleforgood.com/api/deals/" + key;
      let result = await axios.get(url);
      setDealDetails(result.data);
      setShowLoader(false);
    } catch (error) {
      setShowLoader(false);
      console.log("deal details error ------->", error);
    }
  };
  const onClauseSelect = (e) =>{
    if(e.target.value !== "all"){
      let clauseWiseList = reduxdealList.filter(ele => ele.cause.name === e.target.value);
      setDealList(clauseWiseList)
    }else{
      setDealList(reduxdealList);
    }
  }
  return (
    <div className="auth-page home-page">
      <div className="container page">
        <div className="row">
          <h2>Deals</h2>
          <select onChange={onClauseSelect} name="clauseName">
          <option value="all">All</option>
          {clauseList.map((ele,index)=>{
            return <option key={"option" + index} value={ele}>{ele}</option>
          })}
          </select>
        </div>
        {showLoader && (
          <div className="spin-center">
            <Space size="large">
              <Spin size="large" />
            </Space>
          </div>
        )}

        <div className="row">
          <div className="col-md-6">
            {dealList.map((deal, index) => {
              return (
                <Fragment>
                  <div
                    key={index}
                    className="sidebar"
                    style={{
                      background: "none",
                      border: "1px solid black",
                    }}
                  >
                    <h6>Cause :{" " + deal.cause.name}</h6>
                    <p>Title :{" " + deal.title}</p>
                    <p>Price :{" " + deal.price}</p>
                    <button className="btn" onClick={() => selectDeal(deal.key)}>Get Details</button>
                  </div>
                </Fragment>
              );
            })}
          </div>
          <div className="col-md-6">
            <Categories dealDetails={dealDetails}></Categories>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

import React, { useState } from "react";
import styles from "../../pages/Home.module.css";

const Members = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className={styles.groupParent5} id="team">
      <div className={styles.groupWrapper5}>
        <div className={styles.groupWrapper6}>
          <div className={styles.groupWrapper6}>
            <div className={styles.frameWrapper17}>
              <div className={styles.image27Parent1}>
                <img
                  className={styles.image27Icon4}
                  alt=""
                  src="/image-274@2x.png"
                />
                <div className={styles.frameParent6}>
                  <div className={styles.affiliateAnalysisParent}>
                    <div className={styles.contactNow}>
                      Real Estate, Analysis
                    </div>
                    <div className={styles.frameParent7}>
                      <div className={styles.vectorParent}>
                        <img
                          className={styles.vectorIcon}
                          alt=""
                          src="/vector.svg"
                        />
                        <div className={styles.jun2022}>09 jun 2022</div>
                      </div>
                      <div className={styles.contactNow}>By Admin</div>
                    </div>
                  </div>
                  <div className={styles.brajeshPathakParent}>
                    <div className={styles.brajeshPathak}>Brajesh Pathak</div>
                    <div
                      className={styles.aCharteredAccountant}
                    >{`A Chartered Accountant & Company Secretary, has over a decade of experience in managing realty focused venture capital funds, and was heading Azure Capital Advisors Private Limited. He has also been...`}</div>
                    <div className={styles.viewMoreWrapper}>
                      <div className={styles.ourOfferings}>View More</div>
                    </div>
                  </div>
                  <div className={styles.viewMoreParent}>
                    <div className={styles.contactNow}>Search Now</div>
                    <img
                      className={styles.frameChild3}
                      alt=""
                      src="/group-33211.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.frameWrapper18}>
              <div className={styles.image27Parent2}>
                <div className={styles.image27} />
                <img
                  className={styles.image31Icon}
                  alt=""
                  src="/image-31@2x.png"
                />
                <div className={styles.frameParent8}>
                  <div className={styles.affiliateAnalysisParent}>
                    <div className={styles.contactNow}>
                      Real Estate, Analysis
                    </div>
                    <div className={styles.frameParent7}>
                      <div className={styles.vectorParent}>
                        <img
                          className={styles.vectorIcon}
                          alt=""
                          src="/vector.svg"
                        />
                        <div className={styles.jun2022}>09 jun 2022</div>
                      </div>
                      <div className={styles.contactNow}>By Admin</div>
                    </div>
                  </div>
                  <div className={styles.brajeshPathakParent}>
                    <div className={styles.brajeshPathak}>Deepak Shukla</div>
                    <div className={styles.aCharteredAccountant}>
                      Deepak Shukla has completed his B.Tech (hons.) from the
                      Indian Institute of Technology (IIT) Kharagpur and
                      obtained an MBA from the Indian Institute of Management
                      (IIM) Ahmedabad, India...
                    </div>
                    <div className={styles.viewMoreWrapper}>
                      <div className={styles.ourOfferings}>View More</div>
                    </div>
                  </div>
                  <div className={styles.viewMoreParent}>
                    <div className={styles.contactNow}>Search Now</div>
                    <img
                      className={styles.frameChild3}
                      alt=""
                      src="/group-33211.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.frameWrapper19}>
              <div className={styles.image27Parent1}>
                <img
                  className={styles.image27Icon4}
                  alt=""
                  src="/image-275@2x.png"
                />
                <div className={styles.frameParent10}>
                  <div className={styles.affiliateAnalysisParent}>
                    <div className={styles.contactNow}>
                      Real Estate, Analysis
                    </div>
                    <div className={styles.frameParent7}>
                      <div className={styles.vectorParent}>
                        <img
                          className={styles.vectorIcon}
                          alt=""
                          src="/vector.svg"
                        />
                        <div className={styles.jun2022}>09 jun 2022</div>
                      </div>
                      <div className={styles.contactNow}>By Admin</div>
                    </div>
                  </div>
                  <div className={styles.alokKumarSinghParent}>
                    <div className={styles.brajeshPathak}>Alok Kumar Singh</div>
                    <div
                      className={styles.aCharteredAccountant}
                    >{`Entrepreneur with pedigree from IIT-BHU and IIML, and more than 25 years of experience in management responsibilities in top tier companies including Infosys, Infosys BPO and Azure Capital. Co-Founded Azure Capital...`}</div>
                    <div className={styles.viewMoreWrapper}>
                      <div className={styles.ourOfferings}>View More</div>
                    </div>
                  </div>
                  <div className={styles.viewMoreParent}>
                    <div className={styles.contactNow}>Search Now</div>
                    <img
                      className={styles.frameChild3}
                      alt=""
                      src="/group-33211.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.frameWrapper20}>
        <div className={styles.frameWrapper5}>
          <div className={styles.ourOfferingsParent}>
            <b className={styles.ourOfferings}>Our Team Members</b>
            <div className={styles.frameChild6} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Members;

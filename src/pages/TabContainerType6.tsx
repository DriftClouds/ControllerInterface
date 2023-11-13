import React, { FunctionComponent } from "react";
import AskMeAnythingSection from "../components/AskMeAnythingSection";
import styles from "./TabContainerType6.module.css";

const TabContainerType6: FunctionComponent = () => {
  return (
    <div className={styles.tabContainertype6}>
      <div className={styles.content}>
        <div className={styles.frameParent}>
          <div className={styles.frameGroup}>
            <div className={styles.whatWouldIBeWorkingOnHerWrapper}>
              <div className={styles.whatWouldI}>
                What would i be working on here
              </div>
            </div>
            <div className={styles.whatWouldIBeWorkingOnHerWrapper}>
              <div className={styles.whatWouldI}>What’s the Starting pay?</div>
            </div>
            <div className={styles.isThereRoomForAdvancementWrapper}>
              <div className={styles.whatWouldI}>
                Is there room for advancement?
              </div>
            </div>
          </div>
          <div className={styles.frameContainer}>
            <div className={styles.isThereRoomForAdvancementWrapper}>
              <div className={styles.healthInsurance}>Health insurance?</div>
            </div>
            <div className={styles.whyWouldIWantToWorkHereWrapper}>
              <div className={styles.whatWouldI}>
                Why would I want to work here?
              </div>
            </div>
            <div className={styles.swegBenefitsWrapper}>
              <div className={styles.whatWouldI}>SWEG benefits?</div>
            </div>
          </div>
          <div className={styles.frameDiv}>
            <div className={styles.isThereRoomForAdvancementWrapper}>
              <div className={styles.whatWouldI}>resume form?</div>
            </div>
            <div className={styles.whatWouldIBeWorkingOnHerWrapper}>
              <div className={styles.yearsOfSchool}>
                Years of school I need?
              </div>
            </div>
            <div className={styles.doYouHireElectricalEngineeWrapper}>
              <div className={styles.doYouHire}>
                Do you hire Electrical Engineers?
              </div>
            </div>
          </div>
          <div className={styles.frameParent1}>
            <div className={styles.isThereRoomForAdvancementWrapper}>
              <div className={styles.howDoI}>
                How do I get the job or internship?
              </div>
            </div>
            <div className={styles.swegBenefitsWrapper}>
              <div className={styles.whatWouldI}>How do I apply?</div>
            </div>
            <div className={styles.interviewPreparationWrapper}>
              <div className={styles.whatWouldI}>Interview preparation?</div>
            </div>
          </div>
        </div>
        <div className={styles.workConditionParent}>
          <div className={styles.workCondition}>Work condition</div>
          <div className={styles.benefits}>Benefits</div>
          <div className={styles.applying}>Applying</div>
          <div className={styles.hiringProcess}>Hiring Process</div>
        </div>
        <AskMeAnythingSection />
      </div>
    </div>
  );
};

export default TabContainerType6;

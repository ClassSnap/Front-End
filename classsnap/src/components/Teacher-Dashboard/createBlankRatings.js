import axiosWithAuth from "../../utils/axiosWithAuth";

const createBlankRatings = (classId, questionId) => {
  axiosWithAuth()
    .get(`/api/student/class/${classId}`)
    .then(res =>
      res.data.forEach(parent =>
        axiosWithAuth().post("api/rating", {
          questionId: questionId,
          learnerparentId: parent.id,
          classId: classId
        })
      )
    );
};

export default createBlankRatings;

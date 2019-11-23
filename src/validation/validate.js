const isEmpty = (data) => {
    return (
        data === null ||
        data === undefined ||
        (typeof data === 'object' && Object.keys(data).length < 1) ||
        (typeof data === 'string' && data.trim().length < 1)
    )
}

const isObjectHeavy = (obj) => {

    // console.log("We got an object as", obj);


    for (let el of Object.values(obj)) {
        console.log('Elements are', el);
        if (!isEmpty(el)) return true;
    }
    return false;
}


const validateMemberData = (memberData) => {


    console.log("here is the result that if the object is heavy or not", isObjectHeavy(memberData[2]));

    if (isObjectHeavy(memberData[2])) {
        // console.log(Object.values(memberData[2]), 'are the values in the member data');
        const memberErrors = [{}, {}, {}];
        memberData.forEach((member, index) => {
            if (index <= 2) {
                if (isEmpty(member.name)) {
                    memberErrors[index].name = 'Provide name of member!';
                }
                if (isEmpty(member.email)) {
                    memberErrors[index].email = 'Provide email of member!';
                }
                if (isEmpty(member.phone)) {
                    memberErrors[index].phone = 'Provide phone number of member!';
                }
                if (isEmpty(member.size)) {
                    memberErrors[index].size = 'Provide T-shirt size of member!';
                }
                if (!member.photo || !member.photoLink) {
                    memberErrors[index].photo = 'Provide photo of member!';
                }
            }
        });
        return {
            isMemberDataValid: Object.values(memberErrors[0]).length === 0 && Object.values(memberErrors[1]).length === 0,
            memberErrors
        }

    } else {
        const memberErrors = [{}, {}, {}];
        memberData.forEach((member, index) => {
            if (index <= 1) {
                if (isEmpty(member.name)) {
                    memberErrors[index].name = 'Provide name of member!';
                }
                if (isEmpty(member.email)) {
                    memberErrors[index].email = 'Provide email of member!';
                }
                if (isEmpty(member.phone)) {
                    memberErrors[index].phone = 'Provide phone number of member!';
                }
                if (isEmpty(member.size)) {
                    memberErrors[index].size = 'Provide T-shirt size of member!';
                }
                if (!member.photo || !member.photoLink) {
                    memberErrors[index].photo = 'Provide photo of member!';
                }
            }
        });
        return {
            isMemberDataValid: Object.values(memberErrors[0]).length === 0 && Object.values(memberErrors[1]).length === 0,
            memberErrors
        }
    }

}

const validateApplicationData = (applicationData) => {

    const errors = {};

    if (isEmpty(applicationData.theme)) {
        errors.theme = 'Select one of the theme to continue!';
    }
    if (isEmpty(applicationData.teamName)) {
        errors.teamName = 'You must have team name!';
    }
    if (isEmpty(applicationData.ideaName)) {
        errors.ideaName = 'Please enter the title of your project!';
    }
    if (!applicationData.pdf || !applicationData.pdfLink) {
        errors.pdf = 'You must submit the synopsis of your project!'
    }

    return {
        isValid: isEmpty(errors),
        errors
    }

}

module.exports = {
    isEmpty,
    validateMemberData,
    validateApplicationData,
}
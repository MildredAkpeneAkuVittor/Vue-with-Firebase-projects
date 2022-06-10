const callback = (error, response) => { return () => { if (error) { throw Error(error) } else { return response; } } }
function getUserPromise(getUser) { return new Promise(async (res, rej) => { let data; try { data = await getUser(callback); } catch (err) { return rej(err); }; return res(data); }) }
function activateUserPromise(activateUser, data) {
    return new Promise(async (res, rej) => { let newData; try { newData = await activateUser(data, callback); } catch (err) { return rej(err); }; return res(newData); })
}
function getAndActivateUser(getUser, activateUser) { return new Promise((res, rej) => { return getUserPromise(getUser).then(data => activ) }) }
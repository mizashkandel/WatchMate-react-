export const login = async (formData) => {
     try{
            const response = await fetch('http://localhost:8000/account/api/token/',{
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData),
            });
            if(!response.ok){
                throw new Error(`Login Failed`);
    
            }
            const data = await response.json();
            return data
        } catch (err) {
            return err
            // SetError("Invalid username or passsword")
        }
}

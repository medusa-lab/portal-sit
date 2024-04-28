from werkzeug.security import check_password_hash 

class User():

    def __init__(self, id, email, password, name="") -> None:
        self.id = id
        self.email = email
        self.password = password
        self.name = name

    @classmethod
    def check_password(self, hashed_password, password):
        return check_password_hash(hashed_password, password)
    
#print(generate_password_hash("subscriute"))
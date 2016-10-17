import json


def add_person(body):
    return 'do some magic!'

def delete_person(personId):
    return 'do some magic!'

def find_personnel_by_status(status):
    return 'do some magic!'

def get_person_by_id(personId):
    return {
                    "department": {
                        "id": "IT-SEC",
                        "name": "IT Infosec"
                    },
                    "effective date": "2016-10-17",
                    "first_name": "Test",
                    "hire_date": "2016-10-17",
                    "id": "E1000001",
                    "last_name": "User",
                    "location": {
                        "address": "string",
                        "city": "string",
                        "id": "string",
                        "name": "string",
                        "postal_code": "string",
                        "state": "string"
                    },
                    "manager": {
                        "department": {
                            "id": "string",
                            "name": "string"
                        },
                        "effective_date": "2016-10-17",
                        "first_name": "string",
                        "hire_date": "2016-10-17",
                        "id": "string",
                        "last_name": "string",
                        "location": {
                            "address": "string",
                            "city": "string",
                            "id": "string",
                            "name": "string",
                            "postal code": "string",
                            "state": "string"
                        },
                        "manager": {},
                        "status": "Active",
                        "term_date": "2016-10-17"
                    },
                    "status": "Active",
                    "term_date": "2016-10-17"
                }, 200

def get_personnel():
    return  [
                {
                    "department": {
                        "id": "IT-SEC",
                        "name": "IT Infosec"
                    },
                    "effective_date": "2016-10-17",
                    "first_name": "Test",
                    "hire_date": "2016-10-17",
                    "id": "E1000001",
                    "last_name": "User",
                    "location": {
                        "address": "string",
                        "city": "string",
                        "id": "string",
                        "name": "string",
                        "postal_code": "string",
                        "state": "string"
                    },
                    "managers": {
                        "department": {
                            "id": "string",
                            "name": "string"
                        },
                        "effective_date": "2016-10-17",
                        "first_name": "string",
                        "hire_date": "2016-10-17",
                        "id": "string",
                        "last_name": "string",
                        "location": {
                            "address": "string",
                            "city": "string",
                            "id": "string",
                            "name": "string",
                            "postal_code": "string",
                            "state": "string"
                        },
                        "managers": {},
                        "status": "Active",
                        "term_date": "2016-10-17"
                    },
                    "status": "Active",
                    "term_date": "2016-10-17"
                }
            ], 200

def update_person(personId, body):
    print('recieved update for: {}'.format(personId))
    return 200

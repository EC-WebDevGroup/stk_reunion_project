from Tkinter import *
import json
#create window
root = Tk()
#modify root window
root.title("Reunion Site Admin")
#width x height of window
root.geometry("500x300")
#create submit button
# s = Button(root, text="Submit", command=)
#create close button
b = Button(root, text="Close", command=root.quit)
#position the button
b.grid(row=5, column=5)
#display button
# b.pack()
#start event loop
root.mainloop()
# json_data = open('js\data.js')
# data = json.load(json_data)
# create class for user objects
# class Users():
# 	def __init__(self, firstname, lastname, email):
# 		self.first_name = firstname
# 		self.last_name = lastname
# 		self.email = email


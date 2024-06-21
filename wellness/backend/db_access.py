import sqlite3

conn = sqlite3.connect('app.db')

cur = conn.cursor()

res = cur.execute("SELECT * FROM users")

print(res.fetchone() is None)

for row in res:
    print(row)
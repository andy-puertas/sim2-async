INSERT INTO properties ( userid, name, description, address, city, state, zip, image, loanamount, monthlymortgage, desiredrent, recommendedrent )
VALUES ( $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12 )
RETURNING *;
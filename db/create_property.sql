Insert Into properties ( UserId, name, description, address, city, state, zip, image, loanamount, monthlymortgage, rent )
Values ( $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11 );
RETURNING *;
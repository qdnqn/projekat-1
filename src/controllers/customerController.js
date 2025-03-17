const res = require("express/lib/response");

const controller = {};

controller.listHTML = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM customer', (err, customers) => {
            if (err) {
                res.json(err);
            }

            res.render('customers', {
                data: customers
            });
        });
    });
};

controller.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM customer', (err, customers) => {
            if (err) {
                return res.status(500).json(err);
            }

            return res.status(209).json({ customers: customers });
        });
    });
};

controller.save = (req, res) => {
    const data = req.body

    console.log(req)

    if (!data.name || !data.address || !data.phone) {
        return res.status(400).json({ error: "All fields are required" });
    }

    req.getConnection((err, conn) => {
        if (err) {
            return res.status(500).json({ error: 'Database connection error', details: err });
        }

        conn.query('INSERT INTO customer SET ?', [data], (err, result) => {
            if (err) {
                return res.status(500).json({ error: 'Database query error', details: err });
            }

            return res.status(201).json({ message: 'Customer added successfully', id: result.insertId, name: data.name, address: data.address, phone: data.phone });
        });
    });
};

controller.delete = (req, res) => {
    const { id } = req.params;

    req.getConnection((err, conn) => {
        conn.query('DELETE FROM customer WHERE id = ?', [id], (err, rows) => {
            if (err) {
                res.json(err);
            }

            return res.status(200).json({ message: 'Customer removed successfully', id: id });
        });
    });
};

controller.edit = (req, res) => {
    const { id } = req.params;

    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM customer WHERE id = ?', [id], (err, customer) => {
            if (err) {
                res.json(err);
            }
            
            res.render('customer_edit', {
                data: customer[0]
            });
        });
    });
};

controller.update = (req, res) => {
    const { id } = req.params;
    const newCustomer = req.body;
    
    req.getConnection((err, conn) => {
        conn.query('UPDATE customer set ? WHERE id = ?', [newCustomer, id], (err, rows) => {
            if (err) {
                res.json(err);
            }
            
            res.redirect('/api/records');
        });
    });
};

module.exports = controller;
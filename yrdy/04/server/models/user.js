class User {
  constructor(pool) {
    this.pool = pool;
  }

  async create(email, password, username) {
    const query = `
      INSERT INTO users (email, password, username, email_verified, created_at)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING id, email, username, email_verified, created_at
    `;
    const values = [email, password, username, false, new Date()];
    const result = await this.pool.query(query, values);
    return result.rows[0];
  }

  async findByEmail(email) {
    const query = 'SELECT * FROM users WHERE email = $1';
    const result = await this.pool.query(query, [email]);
    return result.rows[0];
  }

  async findById(id) {
    const query = 'SELECT * FROM users WHERE id = $1';
    const result = await this.pool.query(query, [id]);
    return result.rows[0];
  }

  async updateEmailVerified(id, verified) {
    const query = 'UPDATE users SET email_verified = $1 WHERE id = $2 RETURNING *';
    const result = await this.pool.query(query, [verified, id]);
    return result.rows[0];
  }
}

module.exports = User;
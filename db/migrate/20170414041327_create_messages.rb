class CreateMessages < ActiveRecord::Migration[5.0]
  def change
    create_table :messages do |t|
      t.integer :user_id, null: false
      t.integer :home_id, null: false
      t.string :message, null: false
      t.timestamps
    end

    add_index :messages, :user_id
    add_index :messages, :home_id
    add_index :messages, :message

  end
end

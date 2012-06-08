class CreateCards < ActiveRecord::Migration
  def change
    create_table :cards do |t|
      t.string :front
      t.string :back
      t.integer :course_id
      t.integer :answerable

      t.timestamps
    end
  end
end

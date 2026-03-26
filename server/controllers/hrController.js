import prisma from '../db.js';

/**
 * Get all employees for the current organization
 */
export const getEmployees = async (req, res) => {
  try {
    const employees = await prisma.employee.findMany({
      where: { orgId: req.orgId },
      include: {
        manager: {
          select: { id: true, name: true, role: true }
        },
        subordinates: {
          select: { id: true }
        }
      },
      orderBy: { name: 'asc' }
    });

    res.json({
      success: true,
      data: employees
    });
  } catch (error) {
    console.error('Error fetching employees:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch employees'
    });
  }
};

/**
 * Add a new employee
 */
export const addEmployee = async (req, res) => {
  try {
    const { name, email, role, department, managerId, salary, performance } = req.body;

    const newEmployee = await prisma.employee.create({
      data: {
        name,
        email,
        role,
        department,
        salary: salary ? parseFloat(salary) : null,
        performance: performance ? parseFloat(performance) : null,
        managerId,
        orgId: req.orgId
      }
    });

    res.status(201).json({
      success: true,
      data: newEmployee
    });
  } catch (error) {
    console.error('Error adding employee:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to add employee'
    });
  }
};
